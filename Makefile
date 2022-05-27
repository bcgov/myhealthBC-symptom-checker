#!make

# Default Environments
-include ./.env

export COMMIT_SHA?=$(shell git rev-parse --short=7 HEAD)
export REPO_LOCATION=$(shell git rev-parse --show-toplevel)

export PROJECT_NAME = symchk
export LZ2_PROJECT = ph4uto
export LZ2_SUFFIX = symchk
export AWS_REGION ?= ca-central-1


ENV_NAME ?= local
TERRAFORM_DIR = terraform/
PROJECT_CODE = $(LZ2_PROJECT)-$(ENV_NAME)-$(LZ2_SUFFIX)

export REACT_APP_ENV_NAME = $(ENV_NAME)
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
	@echo -e "=========================================================="
	@echo -e "Environment - $(ENV_NAME)"
	@echo -e "=========================================================="
	@echo -e "Project - $(PROJECT_NAME)"
	@echo -e "LZ2 Code - $(LZ2_PROJECT)"
	@echo -e "LZ2 Suffix - $(LZ2_SUFFIX)"
	@echo -e "LZ2 Namespace - $(PROJECT_CODE)"
	@echo -e "=========================================================="
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
	@terraform -chdir=$(TERRAFORM_DIR) plan -no-color

apply: init
	# Creating all AWS infrastructure.
	@terraform -chdir=$(TERRAFORM_DIR) apply -auto-approve -input=false

force-unlock: init
	@terraform -chdir=$(TERRAFORM_DIR) force-unlock $(LOCK_ID)

destroy: init
	@terraform -chdir=$(TERRAFORM_DIR) destroy

refresh: 
	@terraform -chdir=$(TERRAFORM_DIR) apply -refresh-only -auto-approve -input=false

# ============================================================= #
# Build
# ============================================================= #

pre-build:
	@rm -rf .build || true
	@mkdir -p .build;

api-build: pre-build
	@yarn install
	@yarn workspace @symchk/api build
	@yarn workspaces focus @symchk/api --production
	@cp -r node_modules .build/node_modules
	@cp -r ./apps/api/dist/* .build
	@(cd .build; zip -rmq api.zip *)

web-build: pre-build
	@yarn install
	@yarn workspace @symchk/web build
	@cp -r ./apps/web/build/* .build



# ============================================================= #
# Deploy
# ============================================================= #

api-deploy: 
	@aws lambda update-function-code --function-name symchk-api-$(ENV_NAME) --zip-file fileb://.build/api.zip

web-deploy:
	@aws s3 sync .build/ s3://symchk-app-$(ENV_NAME) --delete

web-invalidate:
	@terraform -chdir=terraform output -json | jq -r '.cfid.value' |  xargs -I{} aws --region $(AWS_REGION) cloudfront create-invalidation --distribution-id {} --paths "/*"

# ============================================================= #
# Local Development
# ============================================================= #

docker-down:
	@docker-compose down

docker-build:
	@docker-compose build

docker-run:
	@docker-compose up

docker-run-db:
	@docker-compose up db

# ============================================================= #
# Tag Based Deployments
# ============================================================= #

tag-dev:
	@git tag -fa dev -m "Deploy $(git log --pretty=format:"%an: %s" -1) to DEV env"
	@git push --force origin refs/tags/dev:refs/tags/dev

tag-test:
	@git tag -fa test -m "Deploy $(git log --pretty=format:"%an: %s" -1) to TEST env"
	@git push --force origin refs/tags/test:refs/tags/test

tag-prod:
	@git tag -fa prod -m "Deploy $(git log --pretty=format:"%an: %s" -1) to PROD env"
	@git push --force origin refs/tags/prod:refs/tags/prod
