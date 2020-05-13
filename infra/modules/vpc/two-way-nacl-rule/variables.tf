variable network_acl_id {
  type        = string
  description = "(Required) The ID of the network ACL."
}

variable rule_number {
  type        = number
  description = "(Required) The rule number for the entries (for example, 100). ACL entries are processed in ascending order by rule number."
}

variable protocol {
  type        = string
  description = "(Required) The protocol. A value of -1 means all protocols."
}

variable rule_action {
  type        = string
  description = "(Required) Indicates whether to allow or deny the traffic that matches the rule. Accepted values: allow | deny"
}

variable cidr_block {
  type        = string
  description = "(Optional) The network range to allow or deny, in CIDR notation (for example 172.16.0.0/24 )."
  default     = null
}

variable from_port {
  type        = number
  description = "(Optional) The from port to match."
  default     = null
}

variable to_port {
  type        = number
  description = "(Optional) The to port to match."
  default     = null
}
