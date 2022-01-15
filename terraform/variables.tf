
# from .auto.tfvars
variable "target_env" {}
variable "project_name" {}
variable "project_code" {}
variable "git_version" {}

# Auto populated variables
variable "target_aws_account_id" {}
data "aws_caller_identity" "current" {}

variable "azs" {
  default = ["ca-central-1a", "ca-central-1b"]
}

variable "region" {
  default = "ca-central-1"
}

locals {
  namespace   = var.project_code
  account_id  = data.aws_caller_identity.current.account_id
  app_name    = "${var.project_name}-app-${var.target_env}"
  api_name    = "${var.project_name}-api-${var.target_env}"
  is_prod     = var.target_env == "prod" ? [var.target_env] : []
  is_not_prod = var.target_env != "prod" ? [var.target_env] : []

  internal_domain = var.target_env != "prod" ? 1 : 0
}
