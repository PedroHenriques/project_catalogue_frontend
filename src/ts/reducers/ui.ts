'use strict';
import {
  HOME, SHOW_LOG_IN, SHOW_REGISTER, LOGGED_IN
} from '../actions/actionTypes';
import { IUi } from '../interfaces/redux';
import {
  IHomeAction, IShowLogInAction, IShowRegisterAction, ILoggedInAction
} from '../interfaces/reduxActions';

const initialState: IUi = {
  showHome: true,
  showLogin: false,
  showRegister: false,
  showLostPw: false,
};

export default function ui(
  state: IUi = initialState,
  action: IHomeAction | IShowLogInAction | IShowRegisterAction | ILoggedInAction
): IUi {
  switch (action.type) {
    case HOME:
    case LOGGED_IN:
      return({
        showHome: true,
        showLogin: false,
        showRegister: false,
        showLostPw: false,
      });

    case SHOW_LOG_IN:
      return({
        showHome: false,
        showLogin: true,
        showRegister: false,
        showLostPw: false,
      });

    case SHOW_REGISTER:
      return({
        showHome: false,
        showLogin: false,
        showRegister: true,
        showLostPw: false,
      });

    default:
      return(state);
  }
}