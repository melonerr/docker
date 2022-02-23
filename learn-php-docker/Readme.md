docker build -t php/php-docker .
docker run -d -p 8081:8081  php-docker-run php/php-docker