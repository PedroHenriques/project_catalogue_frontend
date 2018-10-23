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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
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