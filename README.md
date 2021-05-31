# Node Typescript Microservice Boilerplate

Some Standard Docker commands required to build the microservice
```
docker build --build-arg NPM_TOKEN=dc596604-3f3e-4a52-8b25-0212d358c5b4 -t bksdrodrigo/nbe-server-boilerplate:v1 .


docker run --env PORT=7000 -p 7000:7000 --name nbes bksdrodrigo/nbe-server-boilerplate:v1
docker exec -it nbes /bin/ash
docker logs --follow --tail 10 nbes

docker rm $(docker ps -a -f status=exited -q)
docker rmi $(docker images -a -q)
```
