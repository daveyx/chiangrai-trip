import React from 'react';
import {render} from 'react-dom';
import Routes from './routes.js';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import {createStore} from 'redux';

const store = createStore(allReducers, window.devToolsExtension && window.devToolsExtension());

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('react')
);
