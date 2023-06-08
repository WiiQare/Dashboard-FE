terraform {
  required_providers {
    aws = "~> 3.75"
  }
}
  provider "aws" {
    profile = "wicare"
    region = "eu-west-3"
  }

#  resource "aws_iam_user" "user" {
#    name = var.user_name
#  }

  resource "aws_s3_bucket" "bucket" {
    bucket = var.bucket_name
#    acl = "private"
  }
#resource "aws_s3_bucket_ownership_controls" "example" {
#  bucket = aws_s3_bucket.bucket.id
#  rule {
#    object_ownership = "BucketOwnerPreferred"
#  }
#}

#resource "aws_s3_bucket_acl" "wiicare" {
##  depends_on = [aws_s3_bucket_ownership_controls.example]
#
#  bucket = aws_s3_bucket.bucket.id
#  acl    = "private"
#}

locals {
  s3_origin_id = "wiicareS3Origin"
}
  resource "aws_cloudfront_distribution" "distribution" {
#    name = var.distribution_name
#    default_origin_domain_name = aws_s3_bucket.bucket.bucket_regional_domain_name
    origin {
      domain_name = aws_s3_bucket.bucket.bucket_regional_domain_name
#      origin_id = aws_s3_bucket.bucket.id
      origin_id = local.s3_origin_id
    }
    default_cache_behavior {
      allowed_methods = ["GET", "HEAD", "OPTIONS"]
      cached_methods = ["GET", "HEAD", "OPTIONS"]
#      max_age_seconds = 3600
      viewer_protocol_policy = "redirect-to-https"
      target_origin_id = local.s3_origin_id
      forwarded_values {
        query_string = false

        cookies {
          forward = "none"
        }
      }
    }
#    distribution_config {
#      price_class = "PriceClass_All"
#      comment = "My awesome CloudFront"
#      enabled = true
#    }
    enabled = true
    viewer_certificate {
      cloudfront_default_certificate = true
    }
    restrictions {
      geo_restriction {
        restriction_type = "none"
        locations        = []
      }
    }
  }

#  output "user_arn" {
#    value = aws_iam_user.user.arn
#  }

  output "bucket_arn" {
    value = aws_s3_bucket.bucket.arn
  }

  output "distribution_id" {
    value = aws_cloudfront_distribution.distribution.id
  }


#variable "region" {
#  type = string
#  default = "us-east-1"
#}

#variable "user_name" {
#  type = string
#  default = "wiicare-user"
#}

variable "bucket_name" {
  type = string
  default = "wiicare-bucket"
}

#variable "distribution_name" {
#  type = string
#  default = "wiicare-distribution"
#}
