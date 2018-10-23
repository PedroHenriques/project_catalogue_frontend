'use strict';
import * as React from 'react';
import Link from 'redux-first-router-link';

export default class Header extends React.Component<{}, {}> {
  render() {
    return(
      <div id='header'>
        <div id='account-links'>
          <Link to='/login'>Login</Link> | <Link to='/register'>Register</Link>
        </div>
      </div>
    );
  }
}