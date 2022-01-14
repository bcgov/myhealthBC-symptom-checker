
resource "aws_s3_bucket" "app" {
  bucket = local.app_name
  acl    = "private"
}