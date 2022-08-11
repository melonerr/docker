# learn

## Build Setup Nuxt

```bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# build for production and launch server
npm run build

```

## Create Dockerfile 

```bash

# Dockerfile
FROM node:11.13.0-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]

```

## Create Cocker-compose.yml

```bash

version: "3.9"
services:
  nuxt-docker-app:
    build: .
    ports:
      - 3000:3000

```

## Build Setup Docker 

```bash
# build docker image
docker build -t image-name .

# test run container
docker run -it --rm -p {port yml}:{port Dockerfile} image-name

# go to localhost:8080


```

## Push image to Docker hub

```bash

docker tag image-name {name Docker hub}/image-name
docker login
docker push {name Docker hub}/image-name

```

## Push Container to AWS lightsail

```bash

# Docs: https://aws.amazon.com/th/blogs/aws/lightsail-containers-an-easy-way-to-run-your-containers-in-the-cloud/

```
