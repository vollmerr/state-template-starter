Here is the recommended way to build out the `containers` folder:

- Try to only add containers for a single use throughout the application. The most typical use will be pages and the overall application.

- Place components and containers specific to container with the containers folder structure. For example, for the App folder (if not included in the state-template), you could include the Header and Footer, as they are specific to the overall App and will not be reused:
  - /containers
    - /App
      - /Header
        - index.js
        - ...
      - /Footer
        - index.js
        - ...
      - index.js
      - ...

- If needing redux within a container:
  - add the following file structure:
    - actions.js    // actions to dispatch to redux
    - constants.js  // name of the actions to use throughout app, prefixed with the containers name
    - reducer.js    // handle watching for any actions to have been dispatched, updating the store accordingly
    - selectors.js  // extract any needed data using selectors
  - hook the container up to redux using `react-redux`s connect, passing in the state in redux to watch and the actions to dispatch against it
  - register the reducer in the list of reducers in `/src/index.js`

- If needing to make API calls (or some other side effects) within a container:
  - add redux as indicated above
  - add a `saga.js` file with the actions to wait for and side effects to take
  - register the saga in the list of sagas in `/src/index.js`
