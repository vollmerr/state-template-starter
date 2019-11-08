# state-template-starter

This is a starter repo for projects using the [state-template](https://github.com/vollmerr/state-template) package.

## About
This project uses [create-react-app](https://github.com/facebook/create-react-app) as it's foundation, refer to their documentation for issues related to webpack/bundling, extending configurations, etc. 

It also uses the [state-template](https://www.npmjs.com/package/state-template) package as the framework for building [CA State Template](http://template.webstandards.ca.gov/sample/) styled react websites, refer to their documentation for issues related to available components and requirements.

## Quick Start
1. **Clone the Repo**: `git clone https://github.com/vollmerr/state-template-starter.git`
2. **Install Dependencies**: `npm install`
3. **Start Locally**: `npm run start` then navigate to http://localhost:3000

## Running Locally
Use `npm run start:<ENV>`, where `<ENV>` is the environment target. 
This will start the project at http://localhost:3000.

For example, use `npm run start:prod` to start the application pointing at the production API.

## Building
Use `npm run build` to build the project for production, using the `.env.production` environment variables. Adding a `.env.production.local` will allow overriding these variables.

Use `npm run build:staging` to build the project for the staging environment, using the `.env.staging` environment variables. Adding a `.env.staging.local` will allow overriding these variables.

The output will be placed in the `/build` folder.

## Testing
Use `npm run test` to perform a single run of all files with a test coverage report.

Use `npm run test:watch` to rerun tests on only files changed (by default) after every file save. To update snapshots, use this command and press `u`.

Environment variables from the `.env.test` are used when running tests.

### Environment Variables
Environments can be configured using the `.env.<ENV>`, where `<ENV>` is the environment. For example, `.env.development` targets running the application in development. Do not add any secret values to these files, such as API keys. The following is the intent of the environment targets:

environment | target
-|-
development | for running locally
production | for running in production
staging | for running in staging
test | for running tests locally

To configure overrides for a given environment, create a `.env.<ENV>.local` file, such as `.env.development.local`. This file will not be added to version control and can therefore contain secrets such as API keys.

**create-react-app** requires all environment variables to be prefixed with `REACT_APP_`, for example use `REACT_APP_API_URL` instead of `API_URL`. Environment variables without the prefix will be stripped out. Refer to create-react-app's [env var documentation](https://create-react-app.dev/docs/adding-custom-environment-variables/) for more details on how it handles them.

## Polyfills (IE...)
This project by default loads the `react-app-polyfill` package for IE11 support, in the `src/index.js` file.