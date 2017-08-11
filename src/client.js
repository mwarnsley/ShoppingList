import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import 'babel-polyfill';

// Importing the middleware and thunks
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// Import combined reducers
import reducers from './reducers/index';

// Create the middleware logger for showing logs and including the thunks
const middleware = applyMiddleware(thunk, logger);
// Create the store passing in the reducer
const store = createStore(reducers, middleware);

import Main from './components/Main';

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
)
