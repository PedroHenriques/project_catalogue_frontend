'use strict';
import * as React from 'react';
import LoginForm from '../containers/LoginForm';
import RegisterForm from '../containers/RegisterForm';
import LostPassword from '../containers/LostPassword';
import ResetPassword from '../containers/ResetPassword';
import InsertProperty from '../containers/InsertProperty';
import PropertyList from '../containers/PropertyList';

export interface IProps {
  componentToRender: 'home' | 'login' | 'register' | 'lostPw' | 'resetPw' |
    'insertProperty',
}

export default class Main extends React.Component<IProps, {}> {
  render() {
    let child: JSX.Element | null;
    switch (this.props.componentToRender) {
      case 'home':
        child = <PropertyList />;
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

      case 'resetPw':
        child = <ResetPassword />;
        break;

      case 'insertProperty':
        child = <InsertProperty />;
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