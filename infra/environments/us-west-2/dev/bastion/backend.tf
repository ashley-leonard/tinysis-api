terraform {
    backend s3 {
        bucket = "juniperswordplay-terraform-ci"
        region = "us-west-2"
        key    = "tinysis/us-west-2/vpc/terraform.tfstate"
    }
}