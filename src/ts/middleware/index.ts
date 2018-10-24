'use strict';
import * as Redux from 'redux';
import { middleware as routerMiddleware } from '../config/router';
import handleLogIn from './handleLogIn';
import handleLogOut from './handleLogOut';
import handleRegistration from './handleRegistration';
import handleAccountActivation from './handleAccountActivation';
import handleLostPw from './handleLostPw';

export const middleware = Redux.applyMiddleware(
  routerMiddleware, handleLogIn, handleLogOut, handleRegistration,
  handleAccountActivation, handleLostPw
);