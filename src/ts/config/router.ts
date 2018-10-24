'use strict';
import { connectRoutes } from 'redux-first-router';
import { createBrowserHistory } from 'history';
import * as queryString from 'querystring';
import * as ActionTypes from '../actions/actionTypes';

const routesMap = {
  [ActionTypes.HOME]: '/',
  [ActionTypes.LOG_OUT]: '/logout',
  [ActionTypes.SHOW_LOG_IN]: '/login',
  [ActionTypes.SHOW_REGISTER]: '/register',
  [ActionTypes.ACTIVATE_ACCOUNT]: '/activation',
  [ActionTypes.SHOW_LOST_PW]: '/lostPassword',
  [ActionTypes.SHOW_RESET_PW]: '/pwReset',
  [ActionTypes.SHOW_INSERT_PROPERTY]: '/addProperty',
};

const history = createBrowserHistory();

export const {
  reducer, middleware, enhancer
} = connectRoutes(history, routesMap, { querySerializer: queryString });