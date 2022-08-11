# learn

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```



```bash
# build docker image
$ docker build -t image-name .

# test run container
$ docker run -it --rm -p {port yml}:{port Dockerfile} image-name
# localhost:8080

# push image to Docker hub
$ docker tag image-name {name Docker hub}/image-name
$ docker login
$ docker push {name Docker hub}/image-name

# Setting Container in AWS
# Docs: https://aws.amazon.com/th/blogs/aws/lightsail-containers-an-easy-way-to-run-your-containers-in-the-cloud/

```
