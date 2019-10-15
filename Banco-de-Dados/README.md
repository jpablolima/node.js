## Remover Docker
sudo apt-get remove docker docker-engine docker.io containerd runc
sudo apt-get purge docker-ce
sudo rm -rf /var/lib/docker
sudo apt-get remove docker-ce-cli  
sudo apt-get remove docker.io
sudo apt-get remove docker-engine

## Iniciando Docker 
  ### --- Instalação do Docker
      curl -sS https://get.docker.com | sh
## Start Docker
    /etc/init.d/docker start
    ps -ef | grep docker
    docker info
    docker ps   
    docker images
### Criação de Container - Ubunto 19.04
    docker run -i -t ubuntu:19.04 /bin/bash
    docker attach <numero do processo do container>   
    cat /etc/issue
    mkdir python
    apt-get install python3
    apt-get install vim



### Criação de Images Docker
docker commit <numero do id> <nome para image - Descrição:versão>


### --- POSTGRES
docker run \
    --name postgres \
    -e POSTGRES_USER=erickwendel \
    -e POSTGRES_PASSWORD=minhasenhasecreta \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer

## ---- MONGODB
docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
    -d \
    mongo:4

docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

winpty docker exec -it mongodb \
mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin \
--eval "db.getSiblingDB('herois').createUser({user: 'jpablolima', pwd: 'dragonball', roles: [{role: 'readWrite', db: 'herois'}]})"




