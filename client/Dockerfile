FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

RUN yarn global add @quasar/cli

COPY . .

CMD [ "quasar", "dev" ]

