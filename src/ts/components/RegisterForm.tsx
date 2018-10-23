'use strict';
import * as React from 'react';

export interface IState {
  email: string,
  password: string,
  confPassword: string,
  name: string,
}

export default class RegisterForm extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confPassword: '',
      name: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    return;
  }

  public handleChange(event: React.FormEvent<HTMLInputElement>): void {
    switch (event.currentTarget.id) {
      case 'register-email':
        this.setState({ email: event.currentTarget.value });
        break;

      case 'register-pw':
        this.setState({ password: event.currentTarget.value });
        break;

      case 'register-conf-pw':
        this.setState({ confPassword: event.currentTarget.value });
        break;

      case 'register-name':
        this.setState({ name: event.currentTarget.value });
        break;

      default:
        break;
    }
    return;
  }

  render() {
    return(
      <div id='register-form'>
        <form onSubmit={this.handleSubmit}>
          <p><input type='email' placeholder='Email' /></p>
          <p><input type='password' placeholder='Password' /></p>
          <p><input type='password' placeholder='Confirm Password' /></p>
          <p><input type='text' placeholder='Name' /></p>
          <p><button type='submit'>Register</button></p>
        </form>
      </div>
    );
  }
}