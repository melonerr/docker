# vue-docker

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



docker build -t  vuejs/vue-docker .
docker run -it -p 8080:8080 --rm --name docker-vuejs-app vuejs/vue-docker