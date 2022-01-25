plugin "aws" {
    enabled = true
    version = "0.11.0"
    source  = "github.com/terraform-linters/tflint-ruleset-aws"
}


rule "terraform_module_pinned_source" {
  enabled = false
}
