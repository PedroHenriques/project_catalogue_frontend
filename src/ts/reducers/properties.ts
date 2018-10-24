'use strict';
import { GOT_PROPERTIES } from '../actions/actionTypes';
import { IProperties } from '../interfaces/redux';
import { IGotPropertiesAction } from '../interfaces/reduxActions';

const initialState: IProperties | null = null;

export default function properties(
  state: IProperties | null = initialState,
  action: IGotPropertiesAction
): IProperties | null {
  switch (action.type) {
    case GOT_PROPERTIES:
      return({
        ids: (action as IGotPropertiesAction).payload.properties.ids,
        data: (action as IGotPropertiesAction).payload.properties.data,
      });

    default:
      return(state);
  }
}