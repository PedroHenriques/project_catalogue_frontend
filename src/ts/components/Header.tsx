'use strict';
import * as React from 'react';
import Link from 'redux-first-router-link';

export interface IProps {
  userLoggedIn: boolean,
}

export default class Header extends React.Component<IProps, {}> {
  render() {
    const links: (JSX.Element | string)[] = [
      <Link to='/'>Home</Link>,
    ];

    if (this.props.userLoggedIn) {
      links.push(' | ');
      links.push(<Link key='logout' to='/logout'>Logout</Link>);
    } else {
      links.push(' | ');
      links.push(<Link key='login' to='/login'>Login</Link>);
      links.push(' | ');
      links.push(<Link key='register' to='/register'>Register</Link>);
    }

    return(
      <div id='header'>
        <div id='account-links'>{ links }</div>
      </div>
    );
  }
}