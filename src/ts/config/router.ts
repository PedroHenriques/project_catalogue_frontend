'use strict';
import { connectRoutes } from 'redux-first-router';
import { createBrowserHistory } from 'history';
import * as queryString from 'querystring';

const routesMap = {
  HOME: '/',
};

const history = createBrowserHistory();

export const {
  reducer, middleware, enhancer
} = connectRoutes(history, routesMap, { querySerializer: queryString });