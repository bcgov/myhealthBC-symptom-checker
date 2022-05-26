FROM node:16-alpine

ARG BUILD_CONTEXT

COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .
COPY ./apps/$BUILD_CONTEXT apps/$BUILD_CONTEXT

run set 

RUN yarn