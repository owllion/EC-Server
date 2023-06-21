# koh - MERN Stack Shopping App Server
 
[![CI](https://github.com/owllion/EC-Server/actions/workflows/node.yml/badge.svg)](https://github.com/owllion/EC-Server/actions/workflows/node.yml)
[![CD](https://github.com/owllion/EC-Server/actions/workflows/main.yml/badge.svg)](https://github.com/owllion/EC-Server/actions/workflows/main.yml)

- A server for a shopping app powered by Node.js / Express.js and incorporates MongoDB using Typegoose for data integration and modeling. Containerized with Docker for easy deployment and scalability and deployed on Heroku

## Table of Contents

- [Technologies](#technologies)
- [Setup](#setup)
- [License](#license)

## Technologies

- Node.js - v16.15.0
- Express.js - v4.18.1
- Typegoose - v9.9.0
- TypeScript - v4.7.4
- typescript-json-schema - v0.53.1

## Setup

- local

```
git clone https://github.com/owllion/EC-Server.git

npm install

npm run dev
```

- docker

```
docker run -it -p 5000:5000 traversal/react-shopapp:1.0
```

## License

This project is licensed under the terms of the MIT license
