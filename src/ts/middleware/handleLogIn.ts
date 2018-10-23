'use strict';
import { Dispatch, Store } from 'redux';
import { LOG_IN } from '../actions/actionTypes';
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
      .catch(error => {
        return;
      });
    }
    return;
  };

export default handleLogIn;