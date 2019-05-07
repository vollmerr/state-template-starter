import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'state-template';

import 'state-template/dist/style/core/css/colorscheme-oceanside.min.css';

import App from './components/App';
import { reducer as home, saga as homeSaga } from './components/Home';

const reducers = {
  home,
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
