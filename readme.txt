Remark 
    Fast start update realtime

Fast start
    docker run --name {container name} -v {PC path}:{nginx path} -p {PC port}:{nginx port} -d nginx
    docker run --name web -v D:/Work/docker/vol:/usr/share/nginx/html -p 8000:80 -d nginx

Docker stop
    // stop
    docker stop {container name} 
    // remover
    docker rm {container name} 

    // stop and remover
    docker kill {container name} 


Build Dockerfile to image
    docker build -t {name} {Dockerfile path}
    docker build -t nodedemo ./

See Images
    docker images

Run Images
    docker run --name web -p 8000:80 -d mynginx

CD to container
    docker exec -it {container name} bash
    docker exec -it web bash
    ***** WORKDIR คือ ตำแหน่งที่อ้างถึงเมื่อ CD เข้าไป

Edit file in Container
    1. cd to container
    2. vim {nginx file path}

Remove images   
    docker rmi {images name}
