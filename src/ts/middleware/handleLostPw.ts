'use strict';
import { Dispatch, Store } from 'redux';
import { REQUEST_PW_RESET } from '../actions/actionTypes';
import { requestPwReset } from '../utils/backendFacade';
import { IState } from '../interfaces/redux';
import {
  IFluxStandardAction, IRequestPwResetAction
} from '../interfaces/reduxActions';

const handleLostPw = (store: Store<IState, IFluxStandardAction>) =>
  (next: Dispatch<IFluxStandardAction>) => (action: IFluxStandardAction) => {
    if (action.type !== REQUEST_PW_RESET) { return(next(action)); }

    const state = store.getState();
    if (!state.user.isLoggedIn && !state.user.isLoggingIn) {
      const email: string = (action as IRequestPwResetAction).payload.email;

      requestPwReset({ email })
      .then(() => {
        window.alert('An email was sent.');
      })
      .catch(error => {
        window.alert(error);
      });
    }
    return;
  };

export default handleLostPw;