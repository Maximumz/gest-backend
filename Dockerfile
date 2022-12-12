FROM node:16

RUN echo 'Go make yourself a coffee ☕'

WORKDIR /backend

COPY package.json package.json
COPY yarn.lock yarn.lock
COPY .env .env

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start:dev" ]