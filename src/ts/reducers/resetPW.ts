'use strict';
import { SHOW_RESET_PW } from '../actions/actionTypes';
import { IResetPw } from '../interfaces/redux';
import { IShowResetPwAction } from '../interfaces/reduxActions';

const initialState: IResetPw | null = null;

export default function resetPW(
  state: IResetPw | null = initialState,
  action: IShowResetPwAction
): IResetPw | null {
  switch (action.type) {
    case SHOW_RESET_PW:
      return({
        email: (action as IShowResetPwAction).meta.query.email,
        token: (action as IShowResetPwAction).meta.query.token,
      });

    default:
      return(state);
  }
}