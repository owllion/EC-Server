FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
RUN  npm ci --legacy-peer-deps --omit=dev
 
COPY . .

USER node

EXPOSE 443

CMD ["npm","start"]

