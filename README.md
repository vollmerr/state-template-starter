# state-template-starter

This is a starter repo for React projects using the [CA State Template](TODO:link...).

## Why You Should Use This Project
This project is bootstrapped off the [create-react-app](https://github.com/facebook/create-react-app) project and remains unejected, therefore it includes all functionality available in that project with having webpack configs, etc remaining out of view.

This project adds the following additions:
- eslint using [Airbnb's style guide](https://github.com/airbnb/javascript)
- several packages, including:
  - state-template
    - A framework for buidling react applications using the CA state template
  - prop-types
    - prop type checking for components
  - react-redux
    - binding utilities between react and redux
  - react-router-dom
    - routing between components
  - redux
    - state management
  - redux-actions
    - utility for creating actions for redux
  - redux-form
    - forms that use redux for state management
  - redux-saga
    - utilities for working with sagas in redux, allowing for async actions (API calls, etc)
  - reselect
    - utilities for composing data selections and improving performance while using redux
  - node-sass
    - compiles scss files into css

## Why You Should NOT Use This Project
This library very opinionated, as mentioned above it adds several packages that may be out of scope for your project. This project uses the [state-template]() package as a foundation for application structure, styling, and more, and requires all packages included in this project be present. There currently is no support for swapping required packages out (for example redux-saga in favor of redux-thunk).

## About
TODO: insert your about here...

This project uses [create-react-app](https://github.com/facebook/create-react-app) as it's foundation, refer to their documentation for issues related to webpack/bundling, extending configurations, etc. 

It also uses the [state-template](https://www.npmjs.com/package/state-template) package as the framework for building [CA State Template](http://template.webstandards.ca.gov/sample/) styled react websites, refer to their documentation for issues related to available components and requirements.

## Quick Start
1. **Clone the Repo**: TODO: insert repo...
2. **Configure the API**: TODO: insert API docs...
3. **Start the API**: `ctrl + f5` (Visual Studio Code). See API docs for futher assistance.
4. **Start the Client**: `npm run start:local` (from within the client folder). Navigate to http://localhost:3000.

## Running Locally
Use `npm run start:<ENV>`, where `<ENV>` is the environment target. 
This will start the project at http://localhost:3000.

For example, use `npm run start:prod` to start the application pointing at the production API.

## Building
Use `npm run build:<ENV>`, where `<ENV>` is the environment target. The output will be placed in `/client/build`. Copy all the contents of this folder to the destination for deploying.

For example, use `npm run build:prod` to build the application pointing at the production API.

## Testing
Use `npm run test` to perform a single run of all files with a test coverage report.

Use `npm run test:watch` to rerun tests on only files changed (by default) after every file save. To update snapshots, use this command and press `u`.


## Environments
Below is a list of environments available to target. Anywhere in this documentation that says `<ENV>` can be replaced by one of these **environment target**s. When running locally, the client will always be at http://localhost:3000/. Other environment variables will change based off the environment targeted, such as the url to the API.

TODO: fill out environments...

environment target | domain | url
---|---|---
env 1 | target 1 | url 1


### Environment Variables
Environments can be configured using the `.env.<ENV>`, where `<ENV>` is the environment. For example, `.env.local` targets running the application locally. 

**create-react-app** requires all environment variables to be prefixed with `REACT_APP_`, for example use `REACT_APP_API_URL` instead of `API_URL`. Environment variables without the prefix will be stripped out.
