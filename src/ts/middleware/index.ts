'use strict';
import * as Redux from 'redux';
import { middleware as routerMiddleware } from '../config/router';
import handleLogIn from './handleLogIn';
import handleLogOut from './handleLogOut';
import handleRegistration from './handleRegistration';
import handleAccountActivation from './handleAccountActivation';
import handleResetPw from './handleResetPw';
import handleLostPw from './handleLostPw';
import handleInsertProperty from './handleInsertProperty';
import handleProperties from './handleProperties';

export const middleware = Redux.applyMiddleware(
  routerMiddleware, handleLogIn, handleLogOut, handleRegistration,
  handleAccountActivation, handleLostPw, handleResetPw, handleInsertProperty,
  handleProperties
);