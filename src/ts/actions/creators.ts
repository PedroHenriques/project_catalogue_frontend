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

export function loggingIn(): ActionInterfaces.ILogginInAction {
  return({
    type: ActionTypes.LOGGIN_IN,
    payload: {},
  });
}

export function loggedIn(): ActionInterfaces.ILoggedInAction {
  return({
    type: ActionTypes.LOGGIN_IN,
    payload: {},
  });
}