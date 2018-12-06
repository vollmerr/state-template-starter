import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'state-template';

// STEP 1: pick colorscheme
import 'state-template/dist/style/core/css/colorscheme-oceanside.css';

import App from './containers/App';

// STEP 2: import all reducers and sagas
import loadingDataReducer from './containers/LoadingData/reducer';
import loadingDataSaga from './containers/LoadingData/saga';

// STEP 3: register all reducers by name
const reducers = {
  loadingData: loadingDataReducer,
};

// STEP 4: register all sagas in the list of sagas
const sagas = [
  loadingDataSaga,
];

const store = configureStore({ reducers, sagas });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
