'use strict';
import { FLASH, UNFLASH } from '../actions/actionTypes';
import { IFlashAction, IUnFlashAction } from '../interfaces/reduxActions';

const initialState: string[] = [];

export default function flashMessages(
  state: string[] = initialState,
  action: IFlashAction | IUnFlashAction
): string[] {
  switch (action.type) {
    case FLASH:
      return([ ...(action as IFlashAction).payload.messages, ...state ]);

    default:
      return(state);
  }
}