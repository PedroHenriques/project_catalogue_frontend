'use strict';
import { LocationState } from 'redux-first-router';

export interface IState {
  location: LocationState,
  user: IUser,
  ui: IUi,
}

export interface IUser {
  isLoggedIn: boolean,
  isLoggingIn: boolean,
}

export interface IUi {
  showHome: boolean,
  showLogin: boolean,
  showRegister: boolean,
  showLostPw: boolean,
}