# Create the Public subnets, one for each availability zone
# included in the VPC. The public subnets will contain instances
# that require public IP addresses, such as load balancers and bastions.
resource aws_subnet public {
  count             = var.availability_zones_count
  vpc_id            = aws_vpc.this.id
  cidr_block        = cidrsubnet(local.public_cidr_block, 2, count.index)
  availability_zone = element(local.availability_zone_names, count.index)
  tags = {
    Name         = "tinysis-${var.environment_name}-public-${element(local.availability_zone_names, count.index)}"
    "Managed By" = "Terraform"
    Block        = "public"
  }
}

#############
# Create a Route Table for the public subnets, and
# make it the new main Route Table for the VPC.
# This Route Table will include a default route for local (VPC) traffic
resource aws_route_table public {
  vpc_id = aws_vpc.this.id
  tags = {
    Name         = "tinysis-${var.environment_name}-public"
    "Managed By" = "Terraform"
    Block        = "public"
  }
}

resource aws_main_route_table_association vpc_main_routetable_assoc {
  vpc_id         = aws_vpc.this.id
  route_table_id = aws_route_table.public.id
}
#############

#############
# Create a route for all (non VPC) traffic in the public
# subnets to the Internet Gateway. This is what
# makes the subnets "public".
resource aws_route public_internet_gateway {
  route_table_id         = aws_route_table.public.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.this.id
}

resource aws_route_table_association public_subnet {
  count          = length(aws_subnet.public)
  subnet_id      = element(aws_subnet.public.*.id, count.index)
  route_table_id = aws_route_table.public.id
}
#############

#############
# Create NAT Gateway in the first public subnet.
# All private subnets wil route their public internet traffic to this
# NAT Gateway. The NAT Gateway will then forward the traffic
# onto the internet (via the Internet Gateway).
resource aws_eip nat {
  vpc        = true
  depends_on = [aws_internet_gateway.this]
}

resource aws_nat_gateway this {
  allocation_id = aws_eip.nat.id
  subnet_id     = element(aws_subnet.public.*.id, 0)
  tags = {
    Name         = "tinysis-${var.environment_name}"
    "Managed By" = "Terraform"
  }
}
#############

# Create a Network ACL for the public subnets
resource aws_network_acl public {
  vpc_id     = aws_vpc.this.id
  subnet_ids = aws_subnet.public.*.id
  tags = {
    Name         = "tinysis-${var.environment_name}-public"
    "Managed By" = "Terraform"
    Block        = "public"
  }
}

# Open all ephemeral TCP ports with public internet,
# public subnets, and private subnets.
module two_way_nacl_rule_public_ephemeral_tcp {
  source         = "./two-way-nacl-rule"
  network_acl_id = aws_network_acl.public.id
  protocol       = "tcp"
  rule_number    = 20
  rule_action    = "allow"
  cidr_block     = "0.0.0.0/0"
  from_port      = 1024
  to_port        = 65535
}

# Open all ephemeral UDP ports with public internet,
# public subnets, and private subnets.
module two_way_nacl_rule_public_ephemeral_udp {
  source         = "./two-way-nacl-rule"
  network_acl_id = aws_network_acl.public.id
  protocol       = "udp"
  rule_number    = 30
  rule_action    = "allow"
  cidr_block     = "0.0.0.0/0"
  from_port      = 1024
  to_port        = 65535
}

# Open HTTP port (80) with public internet,
# public subnets, and private subnets.
module two_way_nacl_rule_public_http {
  source         = "./two-way-nacl-rule"
  network_acl_id = aws_network_acl.public.id
  protocol       = "tcp"
  rule_number    = 40
  rule_action    = "allow"
  cidr_block     = "0.0.0.0/0"
  to_port        = 80
  from_port      = 80
}

# Open HTTPS port (443) with public internet,
# public subnets, and private subnets.
module two_way_nacl_rule_public_https {
  source         = "./two-way-nacl-rule"
  network_acl_id = aws_network_acl.public.id
  protocol       = "tcp"
  rule_number    = 50
  rule_action    = "allow"
  cidr_block     = "0.0.0.0/0"
  to_port        = 443
  from_port      = 443
}

# Open NTP port (123) with public internet,
# public subnets, and private subnets.
module two_way_nacl_rule_public_ntp {
  source         = "./two-way-nacl-rule"
  network_acl_id = aws_network_acl.public.id
  protocol       = "udp"
  rule_number    = 60
  rule_action    = "allow"
  cidr_block     = "0.0.0.0/0"
  to_port        = 123
  from_port      = 123
}

# Create public Security Group
resource aws_security_group public {
  name   = "tinysis-${var.environment_name}-public"
  vpc_id = aws_vpc.this.id
  tags = {
    Name = "tinysis-${var.environment_name}-public"
    "Managed By" = "Terraform"
    Block        = "public"
  }
}

# Create a rule allowing inbound HTTPS traffic.
resource aws_security_group_rule public_in_https_all {
  type              = "ingress"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.public.id
  description       = "HTTPS"
}

# Create a rule allowing all outbound traffic to any address.
# Security groups are stateful, so this rule will
# also allow any response traffic regardless of
# inbound security group rules.
resource aws_security_group_rule public_out_all_all {
  type              = "egress"
  from_port         = -1
  to_port           = -1
  protocol          = "-1"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.public.id
  description       = "All"
}

