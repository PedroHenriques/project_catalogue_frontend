'use strict';
import * as Redux from 'redux';
import { middleware as routerMiddleware } from '../config/router';
import handleLogIn from './handleLogIn';

export const middleware = Redux.applyMiddleware(
  routerMiddleware, handleLogIn
);