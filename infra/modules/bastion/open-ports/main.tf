# Lookup the VPC
data aws_vpc this {
  tags = {
    Name = "tinysis-${var.environment_name}"
  }
}

# Looks up availability zones in the current AWS region
data aws_availability_zones this {
  state = "available"
}

# Lookup the public security group
data aws_security_group public {
  name = "tinysis-${var.environment_name}-public"
}

# Lookup the first public subnet
data aws_subnet public {
  availability_zone_id = data.aws_availability_zones.this.zone_ids[0]
  filter {
    name = "tag:Block"
    values = ["public"]
  }
}

# Lookup the public subnet NACL
data aws_network_acls public {
  vpc_id = data.aws_vpc.this.id
    tags = {
        Block = "public"
    }
}

resource aws_security_group_rule this {
    type = "ingress"
    from_port = 22
    to_port = 22
    protocol = "tcp"
    security_group_id = data.aws_security_group.public.id
    cidr_blocks = ["${var.client_ip}/32"]
    description = "Tinysis-${var.environment_name} Bastion Access for ${terraform.workspace}"
}

resource aws_network_acl_rule in {
  network_acl_id = sort(data.aws_network_acls.public.ids)[0]
  rule_number    = 1153
  egress         = false
  protocol       = "tcp"
  rule_action    = "allow"
  cidr_block     = "${var.client_ip}/32"
  from_port      = 22
  to_port        = 22
}

resource aws_network_acl_rule out {
  network_acl_id = sort(data.aws_network_acls.public.ids)[0]
  rule_number    = 1153
  egress         = true
  protocol       = "tcp"
  rule_action    = "allow"
  cidr_block     = "10.0.0.0/8"
  from_port      = 22
  to_port        = 22
}
