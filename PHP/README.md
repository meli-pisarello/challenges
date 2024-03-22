If you have `docker` installed you can create a container and execute the php script you want to test

```
docker run -it --rm -v .:/app php:cli php app/UserInput.php
```