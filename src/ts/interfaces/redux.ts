'use strict';
import { LocationState } from 'redux-first-router';

export interface IState {
  location: LocationState,
  user: IUser,
}

export interface IUser {
  isLoggedIn: boolean,
  isLoggingIn: boolean,
}