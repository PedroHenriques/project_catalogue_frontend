'use strict';
import { combineReducers } from 'redux';
import { reducer as routerReducer } from '../config/router';
import user from './user';
import ui from './ui';
import resetPW from './resetPW';
import properties from './properties';
import flashMessages from './flashMessages';
import { LOGGED_OUT } from '../actions/actionTypes';
import { IState } from '../interfaces/redux';
import { IFluxStandardAction } from '../interfaces/reduxActions';

const combinedReducer = combineReducers<IState>({
  location: routerReducer, user, ui, resetPW, properties, flashMessages
});