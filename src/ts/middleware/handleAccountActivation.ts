'use strict';
import { Dispatch, Store } from 'redux';
import { ACTIVATE_ACCOUNT } from '../actions/actionTypes';
import {
  activatingAccount, activatedAccount, showLogIn, flash
} from '../actions/creators';
import { activateAccount } from '../utils/backendFacade';
import { IState } from '../interfaces/redux';
import {
  IFluxStandardAction, IActivateAccountAction
} from '../interfaces/reduxActions';

const handleAccountActivation = (store: Store<IState, IFluxStandardAction>) =>
  (next: Dispatch<IFluxStandardAction>) => (action: IFluxStandardAction) => {
    if (action.type !== ACTIVATE_ACCOUNT) { return(next(action)); }

    const state = store.getState();
    if (!state.user.isLoggedIn && !state.user.isLoggingIn) {
      store.dispatch(activatingAccount());
      activateAccount({
        email: (action as IActivateAccountAction).meta.query.email,
        token: (action as IActivateAccountAction).meta.query.token,
      })
      .then(() => {
        store.dispatch(activatedAccount());
        store.dispatch(showLogIn());
        store.dispatch(flash({
          messages: [
            { message: 'Your account is now active.', type: 'success' },
          ],
        }));
      })
      .catch(error => {
        store.dispatch(showLogIn());
        store.dispatch(flash({
          messages: [
            { message: error, type: 'error' },
          ],
        }));
      });
    }
    return;
  };

export default handleAccountActivation;