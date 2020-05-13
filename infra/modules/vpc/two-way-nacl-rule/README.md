# Two Way AWS NACL Rule
Creates two entries (rules) in a network ACL with the specified rule number. One will be an ingress rule and the other will be an egress rule. This module is usefull when you need to create identical ingress and egress NACL rules.

NOTE: If the value of protocol is -1 or all, the from_port and to_port values will be ignored and the rule will apply to all ports.

## Variables
### network_acl_id
(Required) The ID of the network ACL.

### rule_number
(Required) The rule number for the entries (for example, 100). ACL entries are processed in ascending order by rule number.

### protocol
(Required) The protocol. A value of -1 means all protocols.

### rule_action
(Required) Indicates whether to allow or deny the traffic that matches the rule. Accepted values: allow | deny

### cidr_block
(Optional) The network range to allow or deny, in CIDR notation (for example 172.16.0.0/24 ).
  
### from_port
(Optional) The from port to match.

### to_port
(Optional) The to port to match.
