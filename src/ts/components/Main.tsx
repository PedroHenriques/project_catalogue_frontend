'use strict';
import * as React from 'react';
import LoginForm from '../containers/LoginForm';
import RegisterForm from '../containers/RegisterForm';

export interface IProps {
  componentToRender: 'home' | 'login' | 'register',
}

export default class Main extends React.Component<IProps, {}> {
  render() {
    return(
      <div id='main'>
      </div>
    );
  }
}