'use strict';
import { Dispatch, Store } from 'redux';
import { FLASH } from '../actions/actionTypes';
import { unFlash } from '../actions/creators';
import { IState } from '../interfaces/redux';
import {
  IFluxStandardAction, IFlashAction
} from '../interfaces/reduxActions';

const handleFlashMessages = (store: Store<IState, IFluxStandardAction>) =>
  (next: Dispatch<IFluxStandardAction>) => (action: IFluxStandardAction) => {
    if (action.type === FLASH) {
      window.setTimeout(() => {
        store.dispatch(unFlash({
          count: (action as IFlashAction).payload.messages.length,
        }));
      }, 5000);
    }

    return(next(action));
  };

export default handleFlashMessages;