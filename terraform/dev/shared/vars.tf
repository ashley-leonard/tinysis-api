// shared/vars.tf
variable "aws_region" {}
variable "aws_access_key_id" {}
variable "aws_secret_access_key" {}
variable "aws_zones" {
  description = "List of availability zones to use"
  default     = ["us-west-2a", "us-west-2b", "us-west-2c"]
}