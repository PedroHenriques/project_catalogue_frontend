'use strict';
import * as Redux from 'redux';
import { middleware as routerMiddleware } from '../config/router';
import handleLogIn from './handleLogIn';
import handleLogOut from './handleLogOut';
import handleRegistration from './handleRegistration';

export const middleware = Redux.applyMiddleware(
  routerMiddleware, handleLogIn, handleLogOut, handleRegistration
);