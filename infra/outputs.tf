output "website_url" {
  value = aws_s3_bucket_website_configuration.calculator_website.website_endpoint
}

output "ecr_repository_url" {
  value = aws_ecr_repository.calculator.repository_url
}

output "ecs_cluster_name" {
  value = aws_ecs_cluster.calculator.name
}

output "ecs_service_name" {
  value = aws_ecs_service.calculator.name
}