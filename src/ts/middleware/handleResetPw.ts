'use strict';
import { Dispatch, Store } from 'redux';
import { RESET_PW } from '../actions/actionTypes';
import { showLogIn, flash } from '../actions/creators';
import { pwReset } from '../utils/backendFacade';
import { IState } from '../interfaces/redux';
import {
  IFluxStandardAction, IResetPwAction
} from '../interfaces/reduxActions';

const handleResetPw = (store: Store<IState, IFluxStandardAction>) =>
  (next: Dispatch<IFluxStandardAction>) => (action: IFluxStandardAction) => {
    if (action.type !== RESET_PW) { return(next(action)); }

    const state = store.getState();
    if (!state.user.isLoggedIn && !state.user.isLoggingIn) {
      pwReset({ ...(action as IResetPwAction).payload })
      .then(() => {
        store.dispatch(showLogIn());
      })
      .catch(error => {
        window.alert(error);
        store.dispatch(showLogIn());
      });
    }
    return;
  };

export default handleResetPw;