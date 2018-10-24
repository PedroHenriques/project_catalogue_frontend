'use strict';
import { Action } from 'redux';

export interface IFluxStandardAction extends Action {
  error?: boolean,
  payload: any,
  meta?: any,
}

export interface IHomeAction extends IFluxStandardAction {
  payload: {},
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

export interface IRegisterAction extends IFluxStandardAction {
  payload: {
    email: string,
    password: string,
    name: string,
  },
}

export interface IRegisteringAction extends IFluxStandardAction {
  payload: {},
}

export interface IRegisteredAction extends IFluxStandardAction {
  payload: {},
}

export interface IRegisterFailedAction extends IFluxStandardAction {
  payload: {},
}

export interface IActivateAccountAction extends IFluxStandardAction {
  payload: {
    email: string,
    token: string,
  },
}

export interface IActivatingAccountAction extends IFluxStandardAction {
  payload: {},
}

export interface IActivatedAccountAction extends IFluxStandardAction {
  payload: {},
}

export interface IRequestPwResetAction extends IFluxStandardAction {
  payload: {
    email: string,
  },
}

export interface IResetPwAction extends IFluxStandardAction {
  payload: {
    email: string,
    token: string,
    password: string,
  },
}

export interface IInsertPropertyAction extends IFluxStandardAction {
  payload: {
    title: string, numberOfBeds: string, address: string, countryId: string,
    geoLocation: string, description: string, typeId: string,
  },
}

export interface IShowLogInAction extends IFluxStandardAction {
  payload: {},
}

export interface IShowRegisterAction extends IFluxStandardAction {
  payload: {},
}

export interface IShowLostPwAction extends IFluxStandardAction {
  payload: {},
}

export interface IShowResetPwAction extends IFluxStandardAction {
  meta: {
    query: {
      email: string,
      token: string,
    },
  },
  payload: {},
}

export interface IShowInsertProperty extends IFluxStandardAction {
  payload: {},
}