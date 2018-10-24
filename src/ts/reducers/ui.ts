'use strict';
import {
  HOME, SHOW_LOG_IN, SHOW_REGISTER, SHOW_LOST_PW
} from '../actions/actionTypes';
import { IUi } from '../interfaces/redux';
import {
  IHomeAction, IShowLogInAction, IShowRegisterAction, IShowLostPwAction
} from '../interfaces/reduxActions';

const initialState: IUi = {
  pageToShow: 'home',
};

export default function ui(
  state: IUi = initialState,
  action: IHomeAction | IShowLogInAction | IShowRegisterAction |
    IShowLostPwAction
): IUi {
  switch (action.type) {
    case HOME:
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

    case SHOW_LOST_PW:
      return({
        showHome: false,
        showLogin: false,
        showRegister: false,
        showLostPw: true,
      });

    default:
      return(state);
  }
}