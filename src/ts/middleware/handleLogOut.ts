'use strict';
import { Dispatch, Store } from 'redux';
import { LOG_OUT } from '../actions/actionTypes';
import { showLogIn, loggedOut } from '../actions/creators';
import { logOut } from '../utils/backendFacade';
import { IState } from '../interfaces/redux';
import { IFluxStandardAction } from '../interfaces/reduxActions';

const handleLogOut = (store: Store<IState, IFluxStandardAction>) =>
  (next: Dispatch<IFluxStandardAction>) => (action: IFluxStandardAction) => {
    if (action.type !== LOG_OUT) { return(next(action)); }

    const state = store.getState();
    if (state.user.isLoggedIn) {
      logOut()
      .then(() => {
        store.dispatch(loggedOut());
        store.dispatch(showLogIn());
      })
      .catch(error => {
        console.log(error.message);
      });
    }
    return;
  };

export default handleLogOut;