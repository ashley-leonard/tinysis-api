# Create the Private subnets, one for each availability zone
# included in the VPC. The private subnets will contain instances
# that should not be directly accesible from the internet. This
# is where most instances will reside.
resource aws_subnet private {
  count             = var.availability_zones_count
  vpc_id            = aws_vpc.this.id
  cidr_block        = cidrsubnet(local.private_cidr_block, 2, count.index)
  availability_zone = element(local.availability_zone_names, count.index)
  tags = {
    Name         = "tinysis-${var.environment_name}-private-${element(local.availability_zone_names, count.index)}"
    "Managed By" = "Terraform"
    Block        = "private"
  }
}

# Create a Route Table for the private subnets.
# This Route Table will include a default route for local (VPC) traffic
resource aws_route_table private {
  vpc_id = aws_vpc.this.id
  tags = {
    Name         = "tinysis-${var.environment_name}-private"
    "Managed By" = "Terraform"
    Block        = "private"
  }
}

#############
# Create a route for all (non VPC) traffic in the private
# subnets to the NAT Gateway in the first public subnet. The
# NAT Gateway will route outgoing traffic to the internet, 
# and block all incoming traffic from the internet.
resource aws_route private_nat_gateway {
  route_table_id         = aws_route_table.private.id
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id         = aws_nat_gateway.this.id
}

resource aws_route_table_association private_subnet {
  count          = length(aws_subnet.private)
  subnet_id      = element(aws_subnet.private.*.id, count.index)
  route_table_id = aws_route_table.private.id
}
#############

# Create a Network ACL for the private subnets.
resource aws_network_acl private {
  vpc_id     = aws_vpc.this.id
  subnet_ids = aws_subnet.private.*.id
  tags = {
    Name         = "tinysis-${var.environment_name}-private"
    "Managed By" = "Terraform"
    Block        = "private"
  }
}

# Open all protocols on all ports with
# the public subnets
module two_way_nacl_rule_private_to_from_public {
  source         = "./two-way-nacl-rule"
  network_acl_id = aws_network_acl.private.id
  protocol       = "all"
  rule_number    = 10
  rule_action    = "allow"
  cidr_block     = local.public_cidr_block
  to_port        = 0
  from_port      = 0
}

# Open all protocols on all ports with
# the private subnets
module two_way_nacl_rule_private_to_from_private {
  source         = "./two-way-nacl-rule"
  network_acl_id = aws_network_acl.private.id
  protocol       = "all"
  rule_number    = 20
  rule_action    = "allow"
  cidr_block     = local.private_cidr_block
  to_port        = 0
  from_port      = 0
}

# Open all ephemeral TCP ports with public internet,
# public subnets, and private subnets.
# Note that Network ACL rules are stateless, thus generally
# ephemeral ports are left open on the NACLs. They
# will be protected by the stateful Security Group rules.
module two_way_nacl_rule_private_ephemeral_tcp {
  source         = "./two-way-nacl-rule"
  network_acl_id = aws_network_acl.private.id
  protocol       = "tcp"
  rule_number    = 30
  rule_action    = "allow"
  cidr_block     = "0.0.0.0/0"
  from_port      = 1024
  to_port        = 65535
}

# Open NTP protocol port (123) with public internet,
# public subnets, and private subnets.
module two_way_nacl_rule_private_ntp {
  source         = "./two-way-nacl-rule"
  network_acl_id = aws_network_acl.private.id
  protocol       = "udp"
  rule_number    = 40
  rule_action    = "allow"
  cidr_block     = "0.0.0.0/0"
  to_port        = 123
  from_port      = 123
}

# Open HTTP port (80) with public internet,
# public subnets, and privte subnets.
# This rule is added to allow HTTP calls from
# instances in the private subnets out to
# the internet.
resource aws_network_acl_rule private_http {
  network_acl_id = aws_network_acl.private.id
  protocol       = "tcp"
  rule_number    = 50
  egress         = true
  rule_action    = "allow"
  cidr_block     = "0.0.0.0/0"
  from_port      = 80
  to_port        = 80
}

# Open HTTPS port (443) with public internet,
# public subnets, and privte subnets.
# This rule is added to allow HTTPS calls from
# instances in the private subnets out to
# the internet.
resource aws_network_acl_rule private_https {
  network_acl_id = aws_network_acl.private.id
  protocol       = "tcp"
  rule_number    = 60
  egress         = true
  rule_action    = "allow"
  cidr_block     = "0.0.0.0/0"
  from_port      = 443
  to_port        = 443
}

# Create private security group
resource aws_security_group private {
  name   = "tinysis-${var.environment_name}-private"
  vpc_id = aws_vpc.this.id
  tags = {
    Name = "tinysis-${var.environment_name}-private"
    "Managed By" = "Terraform"
    Block        = "private"
  }
}

# Security Group Rule allowing traffic on all ports in from instances
# in the private security group
resource aws_security_group_rule private_in_all_self {
  type              = "ingress"
  from_port         = -1
  to_port           = -1
  protocol          = "-1"
  self              = true
  security_group_id = aws_security_group.private.id
  description       = "Private Security Group"
}

# Security Group Rule allowing all traffic on all ports out to instances
# in the private security group
resource aws_security_group_rule private_out_all_self {
  type              = "egress"
  from_port         = -1
  to_port           = -1
  protocol          = "-1"
  self              = true
  security_group_id = aws_security_group.private.id
  description       = "Private Security Group"
}

# Security Group Rule allowing all HTTP traffic out to all addresses
resource aws_security_group_rule private_out_http_all {
  type              = "egress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.private.id
  description       = "HTTP"
}

# Security Group Rule allowing all HTTPS traffic out to all addresses
resource aws_security_group_rule private_out_https_all {
  type              = "egress"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.private.id
  description       = "HTTPS"
}

# Security Group Rule allowing all NTP traffic out to all addresses
resource aws_security_group_rule private_out_ntp_all {
  type              = "egress"
  from_port         = 123
  to_port           = 123
  protocol          = "udp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.private.id
  description       = "Network Time Protocol"
}

