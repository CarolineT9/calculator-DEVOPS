terraform {
  backend "s3" {
    bucket         = "seu-nome-terraform-state"
    key            = "calculator/terraform.tfstate"
    region         = "sa-east-1"
    encrypt        = true
    dynamodb_table = "terraform-locks"
  }
}