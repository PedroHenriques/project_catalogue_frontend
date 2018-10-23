'use strict';

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