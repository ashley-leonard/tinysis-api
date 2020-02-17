// service/remote-shared.tf
data "terraform_remote_state" "shared" {
  backend = "s3"

  config = {
    bucket = "juniperswordplay-terraform-ci"
    key    = "shared/terraform.tfstate",
    region = "us-west-2"
  }
}