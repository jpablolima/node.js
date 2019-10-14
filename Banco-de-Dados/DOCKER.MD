# Docker Comandos

Para todas as instâncias
docker stop $(docker ps -a -q)

Remove todas as instâncias
docker rm $(docker ps -a -q)

Para todas as imagens
docker image rm $(docker image ls -a -q)