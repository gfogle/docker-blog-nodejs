# pop that CD in and install ubuntu 14.04
FROM ubuntu:14.04 

# RUN a command. In this case we're just getting
# the bash command straightened out here.
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install curl so that we can clone NVM to help
# us manage multiple versions of node
RUN apt-get update && \
    apt-get install -y curl && \
    apt-get -y autoclean

# set some environment variables that we'll use
# a little further down to install NVM and Node
ENV NVM_DIR /usr/local/nvm
ENV NVM_VERSION 0.31.2
ENV NODE_VERSION 8.9.4

# install nvm
# https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v$NVM_VERSION/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh && \
    nvm install $NODE_VERSION && \
    nvm alias default $NODE_VERSION && \
    nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# confirm installation
RUN node -v
RUN npm -v

# Essentially running mkdir <name> inside the current working
# directory, and then cd <name>
WORKDIR /usr/src/app

# copy the package.json from your computer, into the 
# current directory inside of the container. Then install
# all the dependencies. Then copy the rest of the files
# recursively into the container.
COPY package.json .
RUN npm install 
COPY . .

# Expose port 4000 inside the container to the outside world
# so that http://localhost:4000 routes the network traffic to
# the container
EXPOSE 4000

# the command line to run when the container is started
CMD [ "npm", "start" ]