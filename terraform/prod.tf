

# data "aws_acm_certificate" "symchk" {
#   count    = var.target_env == "prod" ? 1 : 0
#   domain   = ""
#   statuses = ["ISSUED"]
#   provider = aws.us-east-1
# }

