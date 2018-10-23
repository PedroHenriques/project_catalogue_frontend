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

export interface ILoggingInAction extends IFluxStandardAction {
  payload: {},
}

export interface ILoggedInAction extends IFluxStandardAction {
  payload: {},
}

export interface ILogInFailedAction extends IFluxStandardAction {
  payload: {},
}

export interface ILogOutAction extends IFluxStandardAction {
  payload: {},
}

export interface ILoggedOutAction extends IFluxStandardAction {
  payload: {},
}

export interface IShowLogInAction extends IFluxStandardAction {
  payload: {},
}