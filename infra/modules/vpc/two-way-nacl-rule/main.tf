resource aws_network_acl_rule in {
  network_acl_id = var.network_acl_id
  protocol       = var.protocol
  rule_number    = var.rule_number
  egress         = false
  rule_action    = var.rule_action
  cidr_block     = var.cidr_block
  from_port      = var.from_port
  to_port        = var.to_port
}

resource aws_network_acl_rule out {
  network_acl_id = var.network_acl_id
  protocol       = var.protocol
  rule_number    = var.rule_number
  egress         = true
  rule_action    = var.rule_action
  cidr_block     = var.cidr_block
  from_port      = var.from_port
  to_port        = var.to_port
}
