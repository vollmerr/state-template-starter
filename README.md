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

## Getting Started

1. Install dependencies using `npm install`.
2. Start the application using `npm start`. It should open at http://localhost:3000.
3. Run the tests using `npm run test`. Run in watch mode using `npm run test:watch`.
4. Build the application using `npm run build`. The project gets built to the `/build` folder.
