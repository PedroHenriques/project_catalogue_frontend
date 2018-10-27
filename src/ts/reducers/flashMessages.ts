'use strict';
import { IFluxStandardAction } from '../interfaces/reduxActions';

const initialState: string[] = [];

export default function flashMessages(
  state: string[] = initialState,
  action: IFluxStandardAction
): string[] {
  switch (action.type) {
    default:
      return(state);
  }
}