provider aws {
  region = "us-west-2"
}

module bastion {
    source = "../../../../../modules/bastion/open-ports"
    environment_name = "dev"
    client_ip = var.client_ip
}
