'use strict';
import { connectRoutes } from 'redux-first-router';
import { createBrowserHistory } from 'history';
import * as queryString from 'querystring';
import * as ActionTypes from '../actions/actionTypes';

const routesMap = {
  [ActionTypes.HOME]: '/',
};

const history = createBrowserHistory();

export const {
  reducer, middleware, enhancer
} = connectRoutes(history, routesMap, { querySerializer: queryString });