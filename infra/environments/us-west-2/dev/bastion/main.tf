provider aws {
  region = "us-west-2"
}

module bastion {
    source = "../../../../modules/bastion"
    environment_name = "dev"
}
