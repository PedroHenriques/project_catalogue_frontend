'use strict';
import {
  HOME, SHOW_LOG_IN, SHOW_REGISTER, SHOW_LOST_PW, SHOW_INSERT_PROPERTY
} from '../actions/actionTypes';
import { IUi } from '../interfaces/redux';
import {
  IHomeAction, IShowLogInAction, IShowRegisterAction, IShowLostPwAction,
  IShowInsertPropertyAction
} from '../interfaces/reduxActions';

const initialState: IUi = {
  pageToShow: 'home',
};

export default function ui(
  state: IUi = initialState,
  action: IHomeAction | IShowLogInAction | IShowRegisterAction |
    IShowLostPwAction | IShowInsertPropertyAction
): IUi {
  switch (action.type) {
    case HOME:
      return({
        pageToShow: 'home',
      });

    case SHOW_LOG_IN:
      return({
        pageToShow: 'login',
      });

    case SHOW_REGISTER:
      return({
        pageToShow: 'register',
      });

    case SHOW_LOST_PW:
      return({
        pageToShow: 'lostPw',
      });

    case SHOW_INSERT_PROPERTY:
      return({
        pageToShow: 'insertProperty',
      });

    default:
      return(state);
  }
}