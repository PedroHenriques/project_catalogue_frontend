'use strict';
import {
  LOGGING_IN, LOGGED_IN, LOG_IN_FAILED, LOGGED_OUT
} from '../actions/actionTypes';
import { IUser } from '../interfaces/redux';
import {
  ILoggingInAction, ILoggedInAction, ILogInFailedAction, ILoggedOutAction
} from '../interfaces/reduxActions';

const initialState: IUser = {
  isLoggedIn: document.cookie.split(';')
    .filter((item) => item.includes('session=')).length === 1,
  isLoggingIn: false,
};

export default function user(
  state: IUser = initialState,
  action: ILoggingInAction | ILoggedInAction | ILogInFailedAction |
    ILoggedOutAction
): IUser {
  switch (action.type) {
    case LOGGING_IN:
      return({ ...state, isLoggingIn: true });

    case LOGGED_IN:
      return({
        ...state,
        isLoggedIn: true,
        isLoggingIn: false,
      });

    case LOG_IN_FAILED:
      return({ ...state, isLoggingIn: false });

    default:
      return(state);
  }
}