'use strict';
import * as ActionTypes from '../actions/actionTypes';
import * as ActionInterfaces from '../interfaces/reduxActions';

export function home(): ActionInterfaces.IHomeAction {
  return({
    type: ActionTypes.HOME,
    payload: {},
  });
}

export function authenticate(
  payload: { email: string, password: string }
): ActionInterfaces.ILogInAction {
  return({
    type: ActionTypes.LOG_IN,
    payload,
  });
}

export function loggingIn(): ActionInterfaces.ILoggingInAction {
  return({
    type: ActionTypes.LOGGING_IN,
    payload: {},
  });
}

export function loggedIn(): ActionInterfaces.ILoggedInAction {
  return({
    type: ActionTypes.LOGGED_IN,
    payload: {},
  });
}

export function logInFailed(): ActionInterfaces.ILogInFailedAction {
  return({
    type: ActionTypes.LOG_IN_FAILED,
    payload: {},
  });
}

export function logOut(): ActionInterfaces.ILogOutAction {
  return({
    type: ActionTypes.LOG_OUT,
    payload: {},
  });
}

export function loggedOut(): ActionInterfaces.ILoggedOutAction {
  return({
    type: ActionTypes.LOGGED_OUT,
    payload: {},
  });
}

export function register(
  payload: { email: string, password: string, name: string }
): ActionInterfaces.IRegisterAction {
  return({
    type: ActionTypes.REGISTER,
    payload,
  });
}

export function registering(): ActionInterfaces.IRegisteringAction {
  return({
    type: ActionTypes.REGISTERING,
    payload: {},
  });
}

export function registered(): ActionInterfaces.IRegisteredAction {
  return({
    type: ActionTypes.REGISTERED,
    payload: {},
  });
}

export function registerFailed(): ActionInterfaces.IRegisterFailedAction {
  return({
    type: ActionTypes.REGISTER_FAILED,
    payload: {},
  });
}

export function activateAccount(
  payload: { email: string, token: string }
): ActionInterfaces.IActivateAccountAction {
  return({
    type: ActionTypes.ACTIVATE_ACCOUNT,
    payload,
  });
}

export function activatingAccount(): ActionInterfaces.IActivatingAccountAction {
  return({
    type: ActionTypes.ACTIVATING_ACCOUNT,
    payload: {},
  });
}

export function activatedAccount(): ActionInterfaces.IActivatedAccountAction {
  return({
    type: ActionTypes.ACTIVATED_ACCOUNT,
    payload: {},
  });
}

export function showLogIn(): ActionInterfaces.IShowLogInAction {
  return({
    type: ActionTypes.SHOW_LOG_IN,
    payload: {},
  });
}

export function showRegister(): ActionInterfaces.IShowRegisterAction {
  return({
    type: ActionTypes.SHOW_REGISTER,
    payload: {},
  });
}

export function showLostPw(): ActionInterfaces.IShowLostPwAction {
  return({
    type: ActionTypes.SHOW_LOST_PW,
    payload: {},
  });
}