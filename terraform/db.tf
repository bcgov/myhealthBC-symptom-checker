
resource "aws_db_subnet_group" "pgsql" {
  name       = "pgsql"
  subnet_ids = module.network.aws_subnet_ids.data.ids
}

resource "aws_rds_cluster_instance" "pgsql" {
  count              = var.target_env == "prod" ? 2 : 1
  identifier         = "${local.db_name}-${count.index}"
  cluster_identifier = aws_rds_cluster.pgsql.id
  instance_class     = "db.r5.large" # 1 core 2vCPU 16 GiB Memory
  engine             = aws_rds_cluster.pgsql.engine
  engine_version     = aws_rds_cluster.pgsql.engine_version
}

resource "aws_rds_cluster" "pgsql" {
  cluster_identifier  = local.db_name
  engine              = "aurora-postgresql"
  availability_zones  = ["ca-central-1a", "ca-central-1b"]
  database_name       = replace(var.project_code, "-", "_")
  master_username     = "symchk"
  master_password     = data.aws_ssm_parameter.postgres_password.value
  storage_encrypted   = true
  deletion_protection = false
  skip_final_snapshot = true
  db_subnet_group_name   = aws_db_subnet_group.pgsql.name
  vpc_security_group_ids = [module.network.aws_security_groups.data.id]

  # 2AM-4AM PST
  preferred_backup_window = "09:00-11:00"
  backup_retention_period = var.target_env == "prod" ? 14 : 3

  lifecycle {
    ignore_changes = [
      availability_zones
    ]
  }
}
