'use strict';
import { Dispatch, Store } from 'redux';
import { normalize } from 'normalizr';
import { GET_ALL_PROPERTIES, HOME } from '../actions/actionTypes';
import { gotProperties } from '../actions/creators';
import { getAllProperties } from '../utils/backendFacade';
import { propertiesSchema } from '../schemas';
import { IState } from '../interfaces/redux';
import { IFluxStandardAction } from '../interfaces/reduxActions';

const handleProperties = (store: Store<IState, IFluxStandardAction>) =>
  (next: Dispatch<IFluxStandardAction>) => (action: IFluxStandardAction) => {
    if (![GET_ALL_PROPERTIES, HOME].includes(action.type)) {
      return(next(action));
    }

    const state = store.getState();
    if (state.user.isLoggedIn) {
      getAllProperties()
      .then(properties => {
        const normalizedProperties = normalize(properties, propertiesSchema);
        store.dispatch(gotProperties({
          properties: {
            ids: normalizedProperties.result,
            data: normalizedProperties.entities.properties,
          },
        }));
      })
      .catch(error => {
        window.alert(error);
      });
    }

    if (action.type === HOME) { return(next(action)); }
    return;
  };

export default handleProperties;