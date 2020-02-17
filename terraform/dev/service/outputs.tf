output "dbusername" {
  value = aws_db_instance.db_instance.username
}
output "dbpassword" {
  value = aws_db_instance.db_instance.password
}
output "fqdn" {
  value = aws_route53_record.www.fqdn
}