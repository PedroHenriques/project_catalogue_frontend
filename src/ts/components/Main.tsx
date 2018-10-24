'use strict';
import * as React from 'react';
import LoginForm from '../containers/LoginForm';
import RegisterForm from '../containers/RegisterForm';
import LostPassword from '../containers/LostPassword';

export interface IProps {
  componentToRender: 'home' | 'login' | 'register' | 'lostPw',
}

export default class Main extends React.Component<IProps, {}> {
  render() {
    let child: JSX.Element | null;
    switch (this.props.componentToRender) {
      case 'home':
        child = <p>Property list goes here</p>;
        break;

      case 'login':
        child = <LoginForm />;
        break;

      case 'register':
        child = <RegisterForm />;
        break;

      case 'lostPw':
        child = <LostPassword />;
        break;

      default:
        child = null;
        break;
    }

    return(
      <div id='main'>
        {child}
      </div>
    );
  }
}