FROM node:16-alpine

COPY apps apps
COPY package.json package.json
COPY tsconfig.json tsconfig.json

RUN yarn

EXPOSE 3030
EXPOSE 4040
