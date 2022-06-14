
locals {
  s3_origin_id  = "app"
}

data "aws_cloudfront_cache_policy" "optimized" {
  name = "Managed-CachingOptimized"
}

data "aws_cloudfront_cache_policy" "disabled" {
  name = "Managed-CachingDisabled"
}

resource "aws_cloudfront_origin_access_identity" "app" {
  comment = local.app_name
}

resource "aws_cloudfront_function" "response" {
  provider = aws.us-east-1
  name     = "${local.namespace}-cf-response"
  runtime  = "cloudfront-js-1.0"
  comment  = "Add security headers"
  code     = file("${path.module}/cloudfront/response.js")
}

resource "aws_cloudfront_distribution" "app" {
  comment = local.app_name
  aliases = var.target_env == "prod" ? [] : ["${var.target_env}.symchk.freshworks.club"]

  origin {
    domain_name = aws_s3_bucket.app.bucket_regional_domain_name
    origin_id   = local.s3_origin_id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.app.cloudfront_access_identity_path
    }
  }

  # Enable in production for production certificate data import
    dynamic "viewer_certificate" {
      for_each = local.is_prod
      content {
        cloudfront_default_certificate = true
      }
    }

  # CNAME to this CF dist is created in freshworks.club hosted zone managed by fw
  dynamic "viewer_certificate" {
    for_each = local.is_not_prod
    content {
      acm_certificate_arn      = aws_acm_certificate.internal_domain[0].arn
      ssl_support_method       = "sni-only"
      minimum_protocol_version = "TLSv1.2_2019"
    }
  }

  # We only need the US/Canada
  price_class = "PriceClass_100"

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = local.s3_origin_id
    cache_policy_id        = data.aws_cloudfront_cache_policy.optimized.id
    viewer_protocol_policy = "redirect-to-https"

    function_association {
      event_type   = "viewer-response"
      function_arn = aws_cloudfront_function.response.arn
    }
  }

}

output "cfid" {
  value = aws_cloudfront_distribution.app.id
}
