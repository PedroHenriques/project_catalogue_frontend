'use strict';
import { Action } from 'redux';

export interface IFluxStandardAction extends Action {
  error?: boolean,
  payload: any,
  meta?: any,
}