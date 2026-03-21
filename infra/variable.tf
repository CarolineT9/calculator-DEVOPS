variable "bucket_name" {
  description = "Bucket criado em terraform para devops"
  type        = string
}

variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "sa-east-1"
}