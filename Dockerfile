FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
RUN  npm ci --save --legacy-peer-deps --omit=dev

RUN npm install pm2 -g

RUN npm run build

COPY ./dist ./

USER node

EXPOSE 8000

CMD ["npm","run","cluster"]

