
variable "aws_region" {}
variable "aws_access_key_id" {}
variable "aws_secret_access_key" {}

/*
 * AWS Zone ID in Route 53
 * Get the Zone ID for the already existing zone from the AWS Console
 */
variable "aws_zone_id" {
  default = "tinysis"
}

/*
 * Fully qualified host name to be added to Route 53 zone
 */
variable "exthostname" {
  default = "ci.tinysis.org"
}