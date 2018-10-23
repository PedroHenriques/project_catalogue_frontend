'use strict';
import { Action } from 'redux';

export interface IFluxStandardAction extends Action {
  error?: boolean,
  payload: any,
  meta?: any,
}

export interface ILogInAction extends IFluxStandardAction {
  payload: {
    email: string,
    password: string
  },
}

export interface ILogginInAction extends IFluxStandardAction {
  payload: {},
}

export interface ILoggedInAction extends IFluxStandardAction {
  payload: {},
}

export interface ILogInFailedAction extends IFluxStandardAction {
  payload: {},
}