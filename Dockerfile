FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
RUN  npm ci --save --legacy-peer-deps 

COPY  . .

USER node

EXPOSE 8000

CMD ["npm","run","start"]

