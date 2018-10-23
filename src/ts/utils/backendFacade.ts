'use strict';

let apiBaseUrl: string = 'TBD';
if (process.env.NODE_ENV === 'development') {
  apiBaseUrl = 'http://localhost:8000/api/v1/';
}
const defaultErrorMsg: string = 'An error occured while processing your ' +
  'request. Please try again.';