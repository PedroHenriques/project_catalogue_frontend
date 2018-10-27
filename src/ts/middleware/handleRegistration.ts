'use strict';
import { Dispatch, Store } from 'redux';
import { REGISTER } from '../actions/actionTypes';
import {
  registering, registered, registerFailed, flash
} from '../actions/creators';
import { registerAccount } from '../utils/backendFacade';
import { IState } from '../interfaces/redux';
import {
  IFluxStandardAction, IRegisterAction
} from '../interfaces/reduxActions';

const handleRegister = (store: Store<IState, IFluxStandardAction>) =>
  (next: Dispatch<IFluxStandardAction>) => (action: IFluxStandardAction) => {
    if (action.type !== REGISTER) { return(next(action)); }

    const state = store.getState();
    if (!state.user.isLoggedIn && !state.user.isLoggingIn) {
      store.dispatch(registering());
      const userEmail = (action as IRegisterAction).payload.email;
      registerAccount({
        email: userEmail,
        password: (action as IRegisterAction).payload.password,
        name: (action as IRegisterAction).payload.name,
      })
      .then(() => {
        store.dispatch(flash({
          messages: [
            {
              message: 'Your registration was sucessfull.' +
                `An email was sent to "${userEmail}" with an activation link.`,
              type: 'success'
            },
          ],
        }));
        store.dispatch(registered());
      })
      .catch(error => {
        store.dispatch(registerFailed());
        store.dispatch(flash({
          messages: [
            { message: error, type: 'error' },
          ],
        }));
      });
    }
    return;
  };

export default handleRegister;