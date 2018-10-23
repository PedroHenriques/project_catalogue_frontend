'use strict';
import * as Redux from 'redux';
import { middleware as routerMiddleware } from '../config/router';

export const middleware = Redux.applyMiddleware(
  routerMiddleware
);