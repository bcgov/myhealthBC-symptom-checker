#!make

export COMMIT_SHA?=$(shell git rev-parse --short=7 HEAD)
export REPO_LOCATION=$(shell git rev-parse --show-toplevel)

export PROJECT_NAME = symchk
export LZ2_PROJECT = ph4uto
export LZ2_SUFFIX = symchk
export AWS_REGION ?= ca-central-1


ENV_NAME ?= dev
TERRAFORM_DIR = terraform/
PROJECT_CODE = $(LZ2_PROJECT)-$(ENV_NAME)-$(LZ2_SUFFIX)


define TFVARS_DATA
target_env = "$(ENV_NAME)"
project_name = "$(PROJECT_NAME)"
project_code = "$(PROJECT_CODE)"
git_version = "$(PROJECT_NAME)-$(COMMIT_SHA)"

endef
export TFVARS_DATA

define TF_BACKEND_CFG
workspaces { name = "$(PROJECT_CODE)" }
hostname     = "app.terraform.io"
organization = "bcgov"
endef
export TF_BACKEND_CFG

# ============================================================= #
# Terraform automation
# ============================================================= #

print-env: 
	@tput setaf 1; 
	@echo -e "\n\n"
	@echo -e "=========================================================="
	@echo -e "Environment - $(ENV_NAME)"
	@echo -e "=========================================================="
	@echo -e "Project - $(PROJECT_NAME)"
	@echo -e "LZ2 Code - $(LZ2_PROJECT)"
	@echo -e "LZ2 Suffix - $(LZ2_SUFFIX)"
	@echo -e "LZ2 Namespace - $(PROJECT_CODE)"
	@echo -e "=========================================================="
	@echo -e "\n\n"
	@tput setaf 9

write-config-tf: 
	@echo "$$TFVARS_DATA" > $(TERRAFORM_DIR)/.auto.tfvars
	@echo "$$TF_BACKEND_CFG" > $(TERRAFORM_DIR)/backend.hcl

init: write-config-tf
	# Initializing the terraform environment
	@terraform -chdir=$(TERRAFORM_DIR) init -input=false \
		-reconfigure \
		-backend-config=backend.hcl

plan: init
	# Creating all AWS infrastructure.
	@terraform -chdir=$(TERRAFORM_DIR) plan

apply: init
	# Creating all AWS infrastructure.
	@terraform -chdir=$(TERRAFORM_DIR) apply -auto-approve -input=false

force-unlock: init
	terraform -chdir=$(TERRAFORM_DIR) force-unlock $(LOCK_ID)

destroy: init
	terraform -chdir=$(TERRAFORM_DIR) destroy
