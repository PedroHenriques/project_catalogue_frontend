'use strict';
import { Dispatch, Store } from 'redux';
import { LOG_IN } from '../actions/actionTypes';
import {
  loggingIn, loggedIn, logInFailed, showLogIn, home
} from '../actions/creators';
import { login } from '../utils/backendFacade';
import { IState } from '../interfaces/redux';
import { IFluxStandardAction, ILogInAction } from '../interfaces/reduxActions';

const handleLogIn = (store: Store<IState, IFluxStandardAction>) =>
  (next: Dispatch<IFluxStandardAction>) => (action: IFluxStandardAction) => {
    if (action.type !== LOG_IN) { return(next(action)); }

    const state = store.getState();
    if (!state.user.isLoggedIn && !state.user.isLoggingIn) {
      store.dispatch(loggingIn());
      login({
        email: (action as ILogInAction).payload.email,
        password: (action as ILogInAction).payload.password,
      })
      .then(() => {
        store.dispatch(loggedIn());
        store.dispatch(home());
      })
      .catch(error => {
        store.dispatch(logInFailed());
        store.dispatch(showLogIn());
      });
    }
    return;
  };

export default handleLogIn;