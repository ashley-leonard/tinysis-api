
# # resource aws_db_subnet_group rds_subnet_grp {
# #   name = join(
# #     "_",
# #     compact(
# #       [
# #         var.environment_name,
# #         lower(var.application_context) == var.default_context ? "" : var.application_context,
# #         "rds",
# #         "subnet_grp",
# #       ],
# #     ),
# #   )

# #   subnet_ids = aws_subnet.application.*.id

# # }

# resource aws_security_group rds {
#   name   = "tinysis-${var.environment_name}-rds"
#   vpc_id = aws_vpc.this.id
# }

# resource aws_security_group_rule rds_in_all_private {
#   type                     = "ingress"
#   from_port                = -1
#   to_port                  = -1
#   protocol                 = "-1"
#   source_security_group_id = aws_security_group.private.id
#   security_group_id        = aws_security_group.rds.id
#   description              = "Private Security Group"
# }

# resource aws_security_group_rule rds_out_all_private {
#   type                     = "egress"
#   from_port                = -1
#   to_port                  = -1
#   protocol                 = "-1"
#   source_security_group_id = aws_security_group.private.id
#   security_group_id        = aws_security_group.rds.id
#   description              = "Private Security Group"
# }

# resource aws_security_group_rule rds_out_ntp_all {
#   type              = "egress"
#   from_port         = 123
#   to_port           = 123
#   protocol          = "udp"
#   cidr_blocks       = ["0.0.0.0/0"]
#   security_group_id = aws_security_group.rds.id
# }

