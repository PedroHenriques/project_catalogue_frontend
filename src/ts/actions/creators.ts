'use strict';
import * as ActionTypes from '../actions/actionTypes';
import * as ActionInterfaces from '../interfaces/reduxActions';

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

export function showLogIn(): ActionInterfaces.IShowLogInAction {
  return({
    type: ActionTypes.SHOW_LOG_IN,
    payload: {},
  });
}