'use strict';
import { Dispatch, Store } from 'redux';
import {
  SHOW_INSERT_PROPERTY, SHOW_LOG_IN, SHOW_LOST_PW, SHOW_REGISTER,
  SHOW_RESET_PW
} from '../actions/actionTypes';
import { showLogIn, home } from '../actions/creators';
import { IState } from '../interfaces/redux';
import { IFluxStandardAction } from '../interfaces/reduxActions';

const handleUi = (store: Store<IState, IFluxStandardAction>) =>
  (next: Dispatch<IFluxStandardAction>) => (action: IFluxStandardAction) => {
    const state = store.getState();

    switch (action.type) {
      case SHOW_INSERT_PROPERTY:
        if (!state.user.isLoggedIn) {
          store.dispatch(showLogIn());
          return;
        }
        break;

      case SHOW_LOG_IN:
      case SHOW_LOST_PW:
      case SHOW_REGISTER:
      case SHOW_RESET_PW:
        if (state.user.isLoggedIn) {
          store.dispatch(home());
          return;
        }
        break;

      default:
        break;
    }

    return(next(action));
  };

export default handleUi;