## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Setting up DB

```bash
$ docker run --rm --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
```

## Swagger OpenAPI Schema

```
http://localhost:3000/api
```

## Running the app

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

## License

Nest is [MIT licensed](LICENSE).
