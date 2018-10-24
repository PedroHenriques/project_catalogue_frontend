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
    const child: JSX.Element[] = [];
    switch (this.props.componentToRender) {
      case 'home':
        child.push(<div id='map' key='map'></div>);
        child.push(<PropertyList key='propertyList' />);
        break;

      case 'login':
        child.push(<LoginForm key='LoginForm' />);
        break;

      case 'register':
        child.push(<RegisterForm key='RegisterForm' />);
        break;

      case 'lostPw':
        child.push(<LostPassword key='LostPassword' />);
        break;

      case 'resetPw':
        child.push(<ResetPassword key='ResetPassword' />);
        break;

      case 'insertProperty':
        child.push(<InsertProperty key='InsertProperty' />);
        break;

      default:
        break;
    }

    return(
      <div id='main'>
        {child}
      </div>
    );
  }
}