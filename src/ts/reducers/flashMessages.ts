'use strict';
import { FLASH } from '../actions/actionTypes';
import { IFlashAction } from '../interfaces/reduxActions';

const initialState: string[] = [];

export default function flashMessages(
  state: string[] = initialState,
  action: IFlashAction
): string[] {
  switch (action.type) {
    case FLASH:
      return([ ...(action as IFlashAction).payload.messages, ...state ]);

    default:
      return(state);
  }
}