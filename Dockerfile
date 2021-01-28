FROM node:lts-alpine

WORKDIR /nuxt_app

RUN apk update && \
    npm install -g npm create-nuxt-app
