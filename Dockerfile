FROM node:current-alpine3.13

WORKDIR /nuxt_app

RUN apk update && \
    npm install -g \
        npm \
        create-nuxt-app \
        firebase-tools