// service/main.tf
resource "aws_db_instance" "db_instance" {
  allocated_storage      = "20"
  db_subnet_group_name   = data.terraform_remote_state.shared.outputs.db_subnet_group_name
  engine                 = "mysql"
  engine_version         = "8.0.16"
  instance_class         = "db.t2.micro"
  name                   = "tinysis_production"
  password               = "DangNabbitry2020"
  port                   = 5432
  publicly_accessible    = true
  username               = "tinysis_production"
  vpc_security_group_ids = [data.terraform_remote_state.shared.outputs.vpc_default_sg_id]
}

data "aws_acm_certificate" "sslcert" {
  domain = "*.tinysis.org"
}

resource "aws_security_group" "public_https" {
  name        = "public-https"
  description = "Allow HTTPS traffic from public"
  vpc_id      = data.terraform_remote_state.shared.outputs.vpc_id
}

resource "aws_security_group_rule" "public_https" {
  type              = "ingress"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  security_group_id = aws_security_group.public_https.id
  cidr_blocks       = ["0.0.0.0/0"]
}

# resource "aws_security_group" "public_database_access" {
#   name        = "public-database-access"
#   description = "Allows a vetted IP address access to the database"
#   vpc_id      = data.terraform_remote_state.shared.outputs.vpc_id

#   # Only postgres in
#   ingress {
#     from_port = 5432
#     to_port = 5432
#     protocol = "tcp"
#     cidr_blocks = ["72.35.151.126/32"]
#   }

#   # Allow all outbound traffic.
#   egress {
#     from_port = 0
#     to_port = 0
#     protocol = "-1"
#     cidr_blocks = ["0.0.0.0/0"]
#   }
# }


/*
 * Create application load balancer
 */
resource "aws_alb" "alb" {
  name            = "alb-tinysis-ci"
  internal        = false
  security_groups = [data.terraform_remote_state.shared.outputs.vpc_default_sg_id, aws_security_group.public_https.id]
  subnets         = data.terraform_remote_state.shared.outputs.public_subnet_ids
}

/*
 * Create target group for ALB
 */
resource "aws_alb_target_group" "default" {
  name     = "tg-myapp"
  port     = "80"
  protocol = "HTTP"
  vpc_id   = data.terraform_remote_state.shared.outputs.vpc_id

  stickiness {
    type = "lb_cookie"
  }
}

/*
 * Create listeners to connect ALB to target group
 */
resource "aws_alb_listener" "https" {
  load_balancer_arn = aws_alb.alb.arn
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = data.aws_acm_certificate.sslcert.arn

  default_action {
    target_group_arn = aws_alb_target_group.default.arn
    type             = "forward"
  }
}

/*
 * Render task definition from template
 */
data "template_file" "task_def" {
  template = "${file("${path.module}/task-definition.json")}"

  vars = {
    mysql_host = aws_db_instance.db_instance.address
    hostname   = "https://${aws_alb.alb.dns_name}/"
  }
}

/*
 * Create Route53 record
 */
resource "aws_route53_record" "www" {
  name      = var.exthostname
  type      = "A"
  zone_id   = "Z2A460MZ96SYZF"

  alias {
    name                   = aws_alb.alb.dns_name
    zone_id                = aws_alb.alb.zone_id
    evaluate_target_health = true
  }
}


/*
 * Create task definition
 */
resource "aws_ecs_task_definition" "td" {
  family                = "myapp"
  container_definitions = data.template_file.task_def.rendered
  network_mode          = "bridge"
}

/*
 * Create ECS Service
 */
resource "aws_ecs_service" "service" {
  name                               = "myapp"
  cluster                            = data.terraform_remote_state.shared.outputs.ecs_cluster_name
  desired_count                      = length(data.terraform_remote_state.shared.outputs.aws_zones)
  iam_role                           = data.terraform_remote_state.shared.outputs.ecsServiceRole_arn
  deployment_maximum_percent         = "200"
  deployment_minimum_healthy_percent = "50"

  ordered_placement_strategy {
    type  = "spread"
    field = "instanceId"
  }

  load_balancer {
    target_group_arn = aws_alb_target_group.default.arn
    container_name   = "web"
    container_port   = "80"
  }

  task_definition = "${aws_ecs_task_definition.td.family}:${aws_ecs_task_definition.td.revision}"
}
