'use strict';
import { LocationState } from 'redux-first-router';

export interface IState {
  location: LocationState,
  properties: IProperties | null,
  user: IUser,
  ui: IUi,
  flashMessages: string[],
  resetPW: IResetPw | null,
}

export interface IProperties {
  ids: string[],
  data: { [key: string]: IPropertyStore },
}

export interface IPropertyBackend {
  id: number,
  title: string,
  numberOfBeds: number,
  address: string,
  geoLocationLat: number,
  geoLocationLong: number,
  description: string | null,
  propertyType: string,
  country: string,
}

export interface IPropertyStore extends IPropertyBackend {}

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