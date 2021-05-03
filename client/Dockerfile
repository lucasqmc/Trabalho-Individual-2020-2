FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

RUN yarn global add @quasar/cli

COPY . .

EXPOSE 8080

CMD [ "quasar", "dev" ]

