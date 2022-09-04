FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN  npm install --save --legacy-peer-deps --omit=dev

COPY  . .

USER node

EXPOSE 8000

CMD ["npm","run","watch"]

