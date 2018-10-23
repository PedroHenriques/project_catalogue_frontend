'use strict';
import * as React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/index';
import { middleware } from './middleware/index';
import { enhancer as routerEnhancer } from './config/router';
import App from './components/App';
import { IState } from './interfaces/redux';
import { IFluxStandardAction } from './interfaces/reduxActions';
import '../scss/index.scss';

const composeEnhancers = ( process.env.NODE_ENV !== 'production' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;

const store = createStore<IState, IFluxStandardAction, {}, {}>(
  reducer, {}, composeEnhancers(routerEnhancer, middleware)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-container')
);