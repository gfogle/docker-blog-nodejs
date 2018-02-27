# docker-blog-nodejs
code for docker posts on nodejs

## basic node server
this folder contains an example for the absolute most basic node process
inside of a container. you can `cd` into that directory and run the following
commands:
```
docker-compose build basic
docker-compose up
```

## from node image
this folder contains a Dockerfile that starts FROM a base node:8.9.4 image instead
of Ubuntu and going through the installing of curl, NVM, node, etc. It also volume
mounts the server.js file into the container and has nodemon watch the file, from inside the container, so that when we save changes it reloads and restarts the server process. The commands dont change.

## exposed debug ports
Exposes the 9229 debug port for node inside the container as well as via the npm start command to allow us to set breakpoints in the nodejs code while still just running inside the container. This is where we make use of the `launch.json` file.
