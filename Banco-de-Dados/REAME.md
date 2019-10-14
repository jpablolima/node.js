## Iniciando Docker Linux
  sudo dockerd
## Iniciando Docker

## Postgres
docker run \
    --name postgres \
    -e POSTGRES_USER=jpablo \
    -e POSTGRES_PASSWORD=bazinga \
    -e POSTGRES_DB=heroes \
    -p 5453:5453 \
    -d \
    postgres

## Interface 

docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer

## MongoDB
docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=gokuadmin \
    -d \
    mongo:4

## -- Cliente
docker pull mongoclient/mongoclient:2.2.0
docker run -d -p 3000:3000 mongoclient/mongoclient

 ## Instalação 
 docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient



