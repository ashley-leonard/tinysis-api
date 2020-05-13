variable cidr_block {
  type = string
  description = "(Required) The CIDR block for this VPC."
}

variable environment_name {
  description = "(Required) The Environment Name for this VPC."
  type = string
}

variable availability_zones_count {
  type    = number
  description = "(Optional) The number of AWS Availability Zones to create subnets for. Default is 2. Currently this module is limited to 4."
  default = 2
}

# variable sg_option_vpc_cidr_to_web {
#   type        = string
#   description = "flag for traffic between web and rest of VPC layer, web allows VPC CIDR block instead of mgmt, app, public SGs if true"
#   default     = "false"
# }

# variable sg_option_enable_dhcp {
#   type        = string
#   description = "flag to enable DHCP to rest of enterprise and data centers"
#   default     = "true"
# }

# variable vpc_cidr_block {
#   type        = string
#   description = "VPC CIDR Block"
# }

# variable public_access_cidr_block {
#   type        = string
#   description = "Widest Possible Access CIDR Block"
#   default     = "0.0.0.0/0"
# }

# variable app_subnets {
#   type        = map(string)
#   description = "Map of App Source CIDR Block By Region/Zone"
# }

# variable public_subnets {
#   type        = map(string)
#   description = "Map of Public Source CIDR Block By Region/Zone"
# }

# variable app_cidr_block {
#   type        = string
#   description = "CIDR block containing all App subnets"
# }

# variable public_cidr_block {
#   type        = string
#   description = "CIDR block containing all Public subnets"
# }

# variable nacl_option_inbound_all_vpc {
#   type        = string
#   description = "flag for inbound rules for entire VPC instead of some layers"
#   default     = "false"
# }

# variable nacl_option_outbound_all_vpc {
#   type        = string
#   description = "flag for outbound rules for entire VPC instead of some layers"
#   default     = "false"
# }

