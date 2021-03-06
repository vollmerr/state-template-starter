import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, serviceWorker } from 'state-template';

import 'state-template/dist/style/core/css/cagov.core.min.css';
import 'state-template/dist/style/core/css/colorscheme-oceanside.min.css';

import App from './components/App';
import { homeReducer, homeSaga } from './components/Home';

const reducers = {
  homeReducer,
};

const sagas = [
  homeSaga,
];

const store = configureStore({ reducers, sagas });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.register();
