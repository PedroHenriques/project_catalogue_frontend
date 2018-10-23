'use strict';
import * as ActionTypes from '../actions/actionTypes';
import * as ActionInterfaces from '../interfaces/reduxActions';

export function authenticate(
  payload: { email: string, pw: string }
): ActionInterfaces.ILogInAction {
  return({
    type: ActionTypes.LOG_IN,
    payload,
  });
}