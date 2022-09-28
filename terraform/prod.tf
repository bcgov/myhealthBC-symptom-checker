

data "aws_acm_certificate" "symchk" {
  count    = var.target_env == "prod" ? 1 : 0
  domain   = "covidcheck.gov.bc.ca"
  statuses = ["ISSUED"]
  provider = aws.us-east-1
}
