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

# Lookup the AMI image to use to create the EC2 instance
data aws_ami ecs_latest_ami {
  most_recent = true

  filter {
    name   = "owner-alias"
    values = ["amazon"]
  }

  filter {
    name   = "name"
    values = ["*-amazon-ecs-optimized"]
  }

  owners = ["amazon"]
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

resource aws_instance bastion {
  ami                         = data.aws_ami.ecs_latest_ami.id
  instance_type               = "t2.micro"
  key_name                    = "tinysis-poc-private-ec2"
  availability_zone           = data.aws_availability_zones.this.names[0]
  vpc_security_group_ids      = [data.aws_security_group.public.id]
  subnet_id                   = data.aws_subnet.public.id
  associate_public_ip_address = true
  tags = {
    Name         = "tinysis-${var.environment_name}-bastion"
    "Managed By" = "Terraform"
  }
}
