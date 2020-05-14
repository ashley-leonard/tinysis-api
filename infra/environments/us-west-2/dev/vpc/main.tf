provider aws {
  region = "us-west-2"
}

module vpc {
    source = "../../../../modules/vpc"
    environment_name = "dev"
    cidr_block = "10.1.0.0/16"
}
