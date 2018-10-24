'use strict';
import { combineReducers } from 'redux';
import { reducer as routerReducer } from '../config/router';
import user from './user';
import ui from './ui';
import { IState } from '../interfaces/redux';

export const reducer = combineReducers<IState>({
  location: routerReducer, user, ui
});