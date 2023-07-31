# koh - MERN Stack Shopping App Server
 
[![CI](https://github.com/owllion/EC-Server/actions/workflows/node.yml/badge.svg)](https://github.com/owllion/EC-Server/actions/workflows/node.yml)
[![CD](https://github.com/owllion/EC-Server/actions/workflows/main.yml/badge.svg)](https://github.com/owllion/EC-Server/actions/workflows/main.yml)

- A server for a shopping app powered by Node.js / Express.js and incorporates MongoDB using Typegoose for data integration and modeling. Containerized with Docker for easy deployment and scalability and deployed on Heroku

## Table of Contents
- [Technologies](#technologies)
- [Features](#features)
- [Setup](#setup)
- [License](#license)

## Technologies

- Node.js - v16.15.0
- Express.js - v4.18.1
- Typegoose - v9.9.0
- TypeScript - v4.7.4
- typescript-json-schema - v0.53.1

## Features
- <strong>Shopping Functionality</strong>: <br>Browse (by category and search), add to cart, apply coupons, leave comments, add to favorites, and complete checkout.
- <strong>User Management</strong>: <br>Login, logout, register (email/Google), password recovery, profile page (view and update personal information, upload profile picture, view order history, and manage coupons .etc).
- <strong>JSON Schema Data Verification</strong>: <br>Ensure data integrity and validation using AJV and typescript-json-schema.
- <strong>CI/CD Integration</strong>:  <br>Automate the build, packaging, and deployment processes with GitHub Actions for continuous integration and deployment.

## Setup

- local

```
git clone https://github.com/owllion/EC-Server.git

npm install

npm run dev
```

- docker

```
docker run -p 5000:5000 --restart=always -d yuhsinzheng/ec-server:latest
```

## License

This project is licensed under the terms of the MIT license
