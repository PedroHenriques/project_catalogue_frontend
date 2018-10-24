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
      const propertyData = (action as IGotPropertiesAction).payload.properties;
      if (propertyData !== null) {
        return({
          ids: propertyData.ids,
          data: propertyData.data,
        });
      } else {
        return(null);
      }

    default:
      return(state);
  }
}