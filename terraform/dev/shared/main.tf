// shared/main.tf
/*
 * Determine most recent ECS optimized AMI
 */
data "aws_ami" "ecs_ami" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["amzn-ami-*-amazon-ecs-optimized"]
  }
}

/*
 * Create ECS cluster
 */
resource "aws_ecs_cluster" "ecs_cluster" {
  name = "ecs-cluster"
}

/*
 * Create ECS IAM Instance Role and Policy
 * Use random id in naming of roles to prevent collisions
 * should other ECS clusters be created in same AWS account
 * using this same code. 
 */
resource "random_id" "code" {
  byte_length = 4
}

resource "aws_iam_role" "ecsInstanceRole" {
  name               = "ecsInstanceRole-${random_id.code.hex}"
  assume_role_policy = <<EOF
{
 "Version": "2008-10-17",
 "Statement": [
   {
     "Sid": "",
     "Effect": "Allow",
     "Principal": {
       "Service": "ec2.amazonaws.com"
     },
     "Action": "sts:AssumeRole"
   }
 ]
}
EOF

}

resource "aws_iam_role_policy" "ecsInstanceRolePolicy" {
  name   = "ecsInstanceRolePolicy-${random_id.code.hex}"
  role   = aws_iam_role.ecsInstanceRole.id
  policy = <<EOF
{
 "Version": "2012-10-17",
 "Statement": [
   {
     "Effect": "Allow",
     "Action": [
       "ecs:CreateCluster",
       "ecs:DeregisterContainerInstance",
       "ecs:DiscoverPollEndpoint",
       "ecs:Poll",
       "ecs:RegisterContainerInstance",
       "ecs:StartTelemetrySession",
       "ecs:Submit*",
       "ecr:GetAuthorizationToken",
       "ecr:BatchCheckLayerAvailability",
       "ecr:GetDownloadUrlForLayer",
       "ecr:BatchGetImage",
       "logs:CreateLogStream",
       "logs:PutLogEvents"
     ],
     "Resource": "*"
   }
 ]
}
EOF

}

/*
 * Create ECS IAM Service Role and Policy
 */
resource "aws_iam_role" "ecsServiceRole" {
  name               = "ecsServiceRole-${random_id.code.hex}"
  assume_role_policy = <<EOF
{
 "Version": "2008-10-17",
 "Statement": [
   {
     "Sid": "",
     "Effect": "Allow",
     "Principal": {
       "Service": "ecs.amazonaws.com"
     },
     "Action": "sts:AssumeRole"
   }
 ]
}
EOF

}

resource "aws_iam_role_policy" "ecsServiceRolePolicy" {
  name   = "ecsServiceRolePolicy-${random_id.code.hex}"
  role   = aws_iam_role.ecsServiceRole.id
  policy = <<EOF
{
 "Version": "2012-10-17",
 "Statement": [
   {
     "Effect": "Allow",
     "Action": [
       "ec2:AuthorizeSecurityGroupIngress",
       "ec2:Describe*",
       "elasticloadbalancing:DeregisterInstancesFromLoadBalancer",
       "elasticloadbalancing:DeregisterTargets",
       "elasticloadbalancing:Describe*",
       "elasticloadbalancing:RegisterInstancesWithLoadBalancer",
       "elasticloadbalancing:RegisterTargets"
     ],
     "Resource": "*"
   }
 ]
}
EOF

}

resource "aws_iam_instance_profile" "ecsInstanceProfile" {
  name = "ecsInstanceProfile-${random_id.code.hex}"
  role = aws_iam_role.ecsInstanceRole.name
}


/*
 * Create VPC 
 */
resource "aws_vpc" "vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = {
    Name = "vpc-tinysis"
  }
}

/*
 * Get default security group for reference later
 */
data "aws_security_group" "vpc_default_sg" {
  name   = "default"
  vpc_id = aws_vpc.vpc.id
}

/*
 * Create public and private subnets for each availability zone
 */
resource "aws_subnet" "public_subnet" {
  count             = length(var.aws_zones)
  vpc_id            = aws_vpc.vpc.id
  availability_zone = element(var.aws_zones, count.index)
  cidr_block        = "10.0.${(count.index + 1) * 10}.0/24"

  tags = {
    Name = "public-${element(var.aws_zones, count.index)}"
  }
}

resource "aws_subnet" "private_subnet" {
  count             = length(var.aws_zones)
  vpc_id            = aws_vpc.vpc.id
  availability_zone = element(var.aws_zones, count.index)
  cidr_block        = "10.0.${(count.index + 1) * 11}.0/24"

  tags = {
    Name = "private-${element(var.aws_zones, count.index)}"
  }
}

/*
 * Create internet gateway for VPC
 */
resource "aws_internet_gateway" "internet_gateway" {
  vpc_id = aws_vpc.vpc.id
}

/*
 * Create NAT gateway and allocate Elastic IP for it
 */
resource "aws_eip" "gateway_eip" {}

resource "aws_nat_gateway" "nat_gateway" {
  allocation_id = aws_eip.gateway_eip.id
  subnet_id     = aws_subnet.public_subnet.0.id
  depends_on    = [aws_internet_gateway.internet_gateway]
}

/*
 * Routes for private subnets to use NAT gateway
 */
resource "aws_route_table" "nat_route_table" {
  vpc_id = aws_vpc.vpc.id
}

resource "aws_route" "nat_route" {
  route_table_id         = aws_route_table.nat_route_table.id
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id         = aws_nat_gateway.nat_gateway.id
}

resource "aws_route_table_association" "private_route" {
  count          = length(var.aws_zones)
  subnet_id      = element(aws_subnet.private_subnet.*.id, count.index)
  route_table_id = aws_route_table.nat_route_table.id
}

/*
 * Routes for public subnets to use internet gateway
 */
resource "aws_route_table" "igw_route_table" {
  vpc_id = aws_vpc.vpc.id
}

resource "aws_route" "igw_route" {
  route_table_id         = aws_route_table.igw_route_table.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.internet_gateway.id
}

resource "aws_route_table_association" "public_route" {
  count          = length(var.aws_zones)
  subnet_id      = element(aws_subnet.public_subnet.*.id, count.index)
  route_table_id = aws_route_table.igw_route_table.id
}

/*
 * Create DB Subnet Group for private subnets
 */
resource "aws_db_subnet_group" "db_subnet_group" {
  name       = "db-subnet"
  subnet_ids = aws_subnet.private_subnet.*.id
}

/*
 * Generate user_data from template file
 todo, add the public key here
 */
data "template_file" "user_data" {
  template = "${file("${path.module}/user-data.sh")}"

  vars = {
    ecs_cluster_name = aws_ecs_cluster.ecs_cluster.name
  }
}


/*
 * AWS key pair
 */
 resource "aws_key_pair" "deployer" {
  key_name   = "deployer-key"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDJhK20QQpoWUWkId6vAM/DBzNhsn3iqbYgPDEbwfdNmopZOwRhNxXpGa629wgS2Ro4OAxjsAPOSBV9xpZbx9aSHRi7G238AgI1DU66aTzm7aruy+ITZ0qGJboVjVvo1xqN5Aml78ifQh3Iv/ZOq9zM92j/k7m+Tna4B9DEXrw5ZIAMFMiDd+aYWGeul3mU6rD8AjQlPzwACC14X1YJuvhz9zHRPY+Xm4p5qco54Vi/3TwgpjNmFWrtKVTb9BJHkYky1LXpxYn8sTltzyD1vjelSrzd0vNwTyeSvo6GI8ZRWt2svEGHBfjvRtlCslFRJJckk0RcTJfau3ZrIn237C3H eric@fendente"
}


/*
 * Create Launch Configuration
 */
resource "aws_launch_configuration" "as_conf" {
  image_id             = data.aws_ami.ecs_ami.id
  instance_type        = "t2.micro"
  security_groups      = [data.aws_security_group.vpc_default_sg.id]
  iam_instance_profile = aws_iam_instance_profile.ecsInstanceProfile.id
  key_name             = aws_key_pair.deployer.key_name

  root_block_device {
    volume_size = "8"
  }

  user_data = data.template_file.user_data.rendered

  lifecycle {
    create_before_destroy = true
  }
}

/*
 * Create Auto Scaling Group
 */
resource "aws_autoscaling_group" "asg" {
  name                      = "asg-ecs-enviroment"
  availability_zones        = var.aws_zones
  vpc_zone_identifier       = aws_subnet.private_subnet.*.id
  min_size                  = "1"
  max_size                  = "3"
  desired_capacity          = "1"
  launch_configuration      = aws_launch_configuration.as_conf.id
  health_check_type         = "EC2"
  health_check_grace_period = "120"
  default_cooldown          = "30"

  lifecycle {
    create_before_destroy = true
  }
}
