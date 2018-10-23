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