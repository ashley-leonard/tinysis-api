# Looks up information about the AWS region
# Current region is determined by the aws provider block
data aws_region current {}

# Looks up availability zones in the current AWS region
data aws_availability_zones these {
  state = "available"
}

locals {
  # Get the names of availability zones in the current region
  availability_zone_names = element(chunklist(sort(data.aws_availability_zones.these.names), var.availability_zones_count), 0)

  # Given the supplied VPC CIDR block, create a public and private
  # CIDR block using the next 3 bits. This effectively takes the supplied VPC
  # CIDR block and breaks it into 8 smaller blocks, allocating the first for
  # the public subnet, the second for the private subnet, and the remaing 6
  # for any future needs. Each subnet can have 8192 IP addresses.
  public_cidr_block       = cidrsubnet(var.cidr_block, 3, 0)
  private_cidr_block      = cidrsubnet(var.cidr_block, 3, 1)
}

# Create the VPC
resource aws_vpc this {
  cidr_block = var.cidr_block
  tags = {
    Name         = "tinysis-${var.environment_name}"
    "Managed By" = "Terraform"
  }
}

# Each VPC in AWS is created with a default Network ACL.
# This resource doesn't create that Network ACL, but instead
# 'imports' it to bring it under Terraform control
resource aws_default_network_acl this {
  default_network_acl_id = aws_vpc.this.default_network_acl_id

  tags = {
    Name         = "tinysis-${var.environment_name}-default"
    "Managed By" = "Terraform"
  }

  ingress {
    protocol   = "-1"
    rule_no    = 100
    action     = "deny"
    cidr_block = "0.0.0.0/0"
    to_port    = 0
    from_port  = 0
  }

  egress {
    protocol   = "-1"
    rule_no    = 100
    action     = "deny"
    cidr_block = "0.0.0.0/0"
    to_port    = 0
    from_port  = 0
  }
}

# Each VPC in AWS is created with a default Route Table.
# This resource doesn't create that Route Table, but instead
# 'imports' it to bring it under Terraform control
resource aws_default_route_table this {
  default_route_table_id = aws_vpc.this.default_route_table_id

  tags = {
    Name         = "tinysis-${var.environment_name}-default"
    "Managed By" = "Terraform"
  }
}

# Each VPC in AWS is created with a default Security Group.
# This resource doesn't create that Security Group, but instead
# 'imports' it to bring it under Terraform control
resource aws_default_security_group default {
  vpc_id = aws_vpc.this.id

  ingress {
    protocol  = -1
    self      = true
    from_port = 0
    to_port   = 0
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name         = "tinysis-${var.environment_name}-default"
    "Managed By" = "Terraform"
    Description  = "Terraform managed default security group for the Tinysis ${var.environment_name} VPC"
  }
}

# Create an Internet Gateway, this allows
# * Instances with public IP addresses, or Elastic IP Addresses to be reached from the Internet.
# * Instances in public subnets to reach out to the Internet.
resource aws_internet_gateway this {
  vpc_id = aws_vpc.this.id
  tags = {
    Name         = "tinysis-${var.environment_name}"
    "Managed By" = "Terraform"
  }
}