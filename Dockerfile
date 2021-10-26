FROM node:14-alpine

WORKDIR /var/www

COPY package.json ./
RUN npm i

COPY server.js ./


CMD [ "npm", "start" ]