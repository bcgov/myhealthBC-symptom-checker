# These should be manually populated in the console for each environment

data "aws_ssm_parameter" "postgres_password" {
  name = "/${var.project_name}/${var.target_env}/postgres/password"
}

data "aws_ssm_parameter" "slack_alerts_webhook_url" {
  name = "/${var.project_name}/${var.target_env}/slack/alerts_webhook_url"
}
