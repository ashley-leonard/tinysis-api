#!/usr/bin/env bash


# Get a property from terraform.tfvars
function prop {
    grep "${1}" ${2}|cut -d'=' -f2 | tr -d '"' | tr -d ' '
}

function initBackendSettingsFromPath {
    local cwd=$(echo $PWD | sed -n -e '/.*\/environments\//p')

    if [[ -z "${cwd}" ]]; then
        echo "This script must be executed under an 'environments' directory"
        exit 1
    fi

    env_path=$(echo $PWD | sed -e 's/.*\/environments\///')
    aws_region=$(echo ${env_path} | cut -d'/' -f1)
    environment_name=$(echo ${env_path} | cut -d'/' -f2)
    bucket="juniperswordplay-terraform-ci"
    base_state_key="${aws_region}/${environment_name}"
}

function initStateFileSetting {
    if [[ -e "terraform.tfvars" ]]; then
        statefile_suffix=$(prop 'statefile_suffix' terraform.tfvars)
    fi

    if [[ -z "${statefile_suffix}" ]]; then
        statefile_suffix="$(echo ${env_path} | cut -d'/' -f3-)/terraform.tfstate"
    fi

    state_file="tinysis/${base_state_key}/${statefile_suffix}"
    state_url="s3://${bucket}/${state_file}"
}

function outputBackendSettingsVars {
    echo "TF defaults info:"

    echo
    echo "Defaults calculated terraform backend settings:"
    echo "  environment_name    = ${environment_name}"
    echo "  aws_region          = ${aws_region}"
    echo "  bucket              = ${bucket}"
    echo "  base_state_key      = ${base_state_key}"
    echo "  statefile_suffix    = ${statefile_suffix}"
    echo "  state_file          = ${state_file}"
    echo "  state_url           = ${state_url}"
}

function terraform-init {
    echo
    echo "Calling terraform init for Terraform "
        terraform init -no-color \
            -backend-config="acl=bucket-owner-full-control" \
            -backend-config="bucket=${bucket}" \
            -backend-config="key=${state_file}" \
            -backend-config="region=${aws_region}"
}

function terraform-get-and-plan {
    echo
    echo "Running terraform get -update and terraform plan $@"
    terraform get -no-color -update && terraform plan "$@"
}

# Sets up the Remote State for Terraform, runs terraform get -update and terraform plan
# Expects AWS credentials to be setup
#
# To initialize terraform only (and not run update/plan), call
# tf-init.sh --init-only

echo
terraform --version
echo

# Initialize common variables
echo
initBackendSettingsFromPath
initStateFileSetting
outputBackendSettingsVars
terraform-init

if [[ "$1" == "--init-only" ]]; then
  exit
fi

terraform-get-and-plan $@