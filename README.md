<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">An API Gateway built on top of <a href="https://nestjs.com/" target="_blank">NestJS</a> framework.</p>

## Description

As part of a simple order system demonstrating a possible Microservices architecture, this API gateway exposed all its public APIs in a RESTful style. Internally, it demonstrated 2 different ways to communicate microservices, *Message Pattern* (request-response) and *Events Pattern*.

In a production environment, zero or multiple instances of this API gateway may be deployed, depending on the actual infrustructure architecuture.

In a development environment, this API gateway serves as a single entry to the back-end system which a React front-end Web client connects to. It also provides a Swagger UI for documentation and APIs manual try-out. The Swagger document is automatically generated and updated based on the latest code, accessible from `http://{host:port}/api`.

## Installation

```bash
$ npm install
```

## Running the app
The demo app runs on port 3001.
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

This demo is created and maintained by Yao Pian.

## TODO

- Remove Swagger from production build