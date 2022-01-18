# My Health BC - Symptom Checker

## How to run

#### Define .env

```
POSTGRES_USER=username
POSTGRES_PASSWORD=password
```

### Local Docker Environment

1. build docker images
   
   `make docker-build`

2. run docker containers
   
   `make docker-run`

### Local Development

Once you have built images,

1. run database

   `make docker-run-db`

2. run api and web

   `yarn watch`
