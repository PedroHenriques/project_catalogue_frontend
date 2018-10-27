'use strict';
import { Dispatch, Store } from 'redux';
import { INSERT_PROPERTY } from '../actions/actionTypes';
import { home, flash } from '../actions/creators';
import { insertProperty } from '../utils/backendFacade';
import { IState } from '../interfaces/redux';
import {
  IFluxStandardAction, IInsertPropertyAction
} from '../interfaces/reduxActions';

const handleInsertProperty = (store: Store<IState, IFluxStandardAction>) =>
  (next: Dispatch<IFluxStandardAction>) => (action: IFluxStandardAction) => {
    if (action.type !== INSERT_PROPERTY) { return(next(action)); }

    const state = store.getState();
    if (state.user.isLoggedIn) {
      insertProperty({
        title: (action as IInsertPropertyAction).payload.title,
        numberOfBeds: (action as IInsertPropertyAction).payload.numberOfBeds,
        address: (action as IInsertPropertyAction).payload.address,
        countryId: (action as IInsertPropertyAction).payload.countryId,
        geoLocationLat: (action as IInsertPropertyAction).payload
          .geoLocationLat,
        geoLocationLong: (action as IInsertPropertyAction).payload
          .geoLocationLong,
        description: (action as IInsertPropertyAction).payload.description,
        typeId: (action as IInsertPropertyAction).payload.typeId,
      })
      .then(() => {
        store.dispatch(home());
      })
      .catch(error => {
        window.alert(error);
      });
    }
    return;
  };

export default handleInsertProperty;