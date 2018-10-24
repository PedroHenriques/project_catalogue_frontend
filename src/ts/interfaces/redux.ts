'use strict';
import { LocationState } from 'redux-first-router';

export interface IState {
  location: LocationState,
  user: IUser,
  ui: IUi,
  resetPW: IResetPw | null,
}

export interface IUser {
  isLoggedIn: boolean,
  isLoggingIn: boolean,
}

export interface IUi {
  pageToShow: 'home' | 'login' | 'register' | 'lostPw' | 'resetPw' |
    'insertProperty',
}

export interface IResetPw {
  email: string,
  token: string,
}