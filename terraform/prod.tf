

data "aws_acm_certificate" "symchk" {
  domain   = "covidcheck.gov.bc.ca"
  statuses = ["ISSUED"]
  provider = aws.us-east-1
}
