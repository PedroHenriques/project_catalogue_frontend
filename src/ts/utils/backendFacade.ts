'use strict';
import { IPropertyBackend } from '../interfaces/redux';

interface IBaseRequestPayload {
  headers: { [key: string]: string },
  credentials: 'include' | 'omit' | 'same-origin',
}

let apiBaseUrl: string = 'TBD';
if (process.env.NODE_ENV === 'development') {
  apiBaseUrl = 'http://localhost:8000/api/v1/';
}
const defaultErrorMsg: string = 'An error occured while processing your ' +
  'request. Please try again.';

const baseRequestPayload: IBaseRequestPayload = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  credentials: 'include',
};

export const login = (
  args: { email: string, password: string }
): Promise<void> => fetch(
  `${apiBaseUrl}login/`,
  {
    ...baseRequestPayload,
    method: 'POST',
    body: JSON.stringify({
      email: args.email,
      password: args.password,
    }),
  }
)
.then(response => {
  if (response.status === 401) {
    return(Promise.reject('The Email/Password combination is not valid'));
  } else if (!response.ok) {
    return(Promise.reject(defaultErrorMsg));
  }
  return(response.json());
});

export const logOut = (): Promise<boolean> => fetch(
  `${apiBaseUrl}logout/`,
  {
    ...baseRequestPayload,
    method: 'GET',
  }
)
.then(response => {
  if (!response.ok) {
    return(Promise.reject(defaultErrorMsg));
  }
  return(Promise.resolve(true));
});

export const registerAccount = (
  args: { email: string, password: string, name: string }
): Promise<void> => fetch(
  `${apiBaseUrl}users/`,
  {
    ...baseRequestPayload,
    method: 'POST',
    body: JSON.stringify({
      email: args.email,
      password: args.password,
      name: args.name,
    }),

  }
)
.then(response => {
  if (!response.ok) {
    return(Promise.reject(defaultErrorMsg));
  }
  return(response.json());
});

export const activateAccount = (
  args: { email: string, token: string }
): Promise<void> => fetch(
  `${apiBaseUrl}users/activate/`,
  {
    ...baseRequestPayload,
    method: 'POST',
    body: JSON.stringify({
      email: args.email,
      token: args.token,
    }),

  }
)
.then(response => {
  if (!response.ok) {
    return(Promise.reject(defaultErrorMsg));
  }
  return(response.json());
});

export const requestPwReset = (
  args: { email: string }
): Promise<void> => fetch(
  `${apiBaseUrl}users/lostPw/`,
  {
    ...baseRequestPayload,
    method: 'POST',
    body: JSON.stringify({
      email: args.email,
    }),
  }
)
.then(response => {
  if (!response.ok) {
    return(Promise.reject(defaultErrorMsg));
  }
  return(response.json());
});

export const pwReset = (
  args: { email: string, token: string, password: string }
): Promise<void> => fetch(
  `${apiBaseUrl}users/pwReset/`,
  {
    ...baseRequestPayload,
    method: 'POST',
    body: JSON.stringify({
      email: args.email,
      token: args.token,
      password: args.password,
    }),
  }
)
.then(response => {
  if (!response.ok) {
    return(Promise.reject(defaultErrorMsg));
  }
  return(response.json());
});

export const insertProperty = (
  args: {
    title: string, numberOfBeds: string, address: string, countryId: string,
    geoLocationLat: string, geoLocationLong: string, description: string,
    typeId: string,
  }
): Promise<void> => fetch(
  `${apiBaseUrl}properties/`,
  {
    ...baseRequestPayload,
    method: 'POST',
    body: JSON.stringify({
      title: args.title,
      numberOfBeds: args.numberOfBeds,
      address: args.address,
      countryId: args.countryId,
      geoLocationLat: args.geoLocationLat,
      geoLocationLong: args.geoLocationLong,
      description: args.description,
      typeId: args.typeId,
    }),
  }
)
.then(response => {
  if (!response.ok) {
    return(Promise.reject(defaultErrorMsg));
  }
  return(response.json());
});

export const getAllProperties = (): Promise<IPropertyBackend[]> => fetch(
  `${apiBaseUrl}properties/`,
  {
    ...baseRequestPayload,
    method: 'GET',
  }
)
.then(response => {
  if (!response.ok) {
    return(Promise.reject(defaultErrorMsg));
  }
  return(response.json());
})
.then(data => data.properties as IPropertyBackend[]);