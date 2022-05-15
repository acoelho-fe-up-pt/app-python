# App-ludificada

## Overview

The frontend was added and customized from a bootstrapped React project [Create React App](https://github.com/facebookincubator/create-react-app).
The backend was added and customized from a bootstrapped Express project [Express Generator](https://expressjs.com/en/starter/generator.html)

## Folder Structure

After creation, your project should look like this:

``` 
app-ludificada/
  config/
  csvs/
  migrations/
  scripts/
  src-client/
  src-server/
  package.json
  README.md
  .env.development
  .env.production
```

## Prerequisites

Before installing, please make sure to have global installations of

* [node v12 or higher](https://nodejs.org/en/download/)
* npm v12 or higher
* [PostgreSQL](https://www.postgresql.org/download/)


### Primary Scripts

* `$ npm run start` : run the production version of the app
* `$ npm run build` : build the production bundle of the FE app (linting is automatically executed), and perform linting of the BE code
* `$ npm run lint` : perform linting of the BE code
* `$ npm run seed` : perform DB initialization/migration and seeding
* `$ npm run dev` : run the development version of the app
* `$ npm run test:client` : run FE tests using Jest
* `$ npm run test:server` : run BE tests using Jest

### Secondary Scripts

* `$ npm run client:dev` : run Webpack dev server for FE development
* `$ npm run server:dev` : run the development version of BE
* `$ npm run server:prod` : alias of `start`
* `$ npm run pg-migrate` : alias of `node-pg-migrate` module
* `$ npm run db:migrate` : run DB migration scripts
* `$ npm run db:seed` : alias of `seed`
* `$ npm run db:csv-seed` : seeding csv resources to book ( command line questions)
* `$ npm run db:class-seed` : seeding class ( command line questions )

## Authentication Endpoints (/auth/*)

This project uses JWT for authentication.
