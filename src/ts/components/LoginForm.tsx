'use strict';
import * as React from 'react';

interface ILoginFormState {
  email: string,
  password: string,
}

export default class LoginForm extends React.Component<{}, ILoginFormState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    return;
  }

  public handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    switch (event.currentTarget.id) {
      case 'login-email':
        this.setState({ email: event.currentTarget.value });
        break;

      case 'login-pw':
        this.setState({ password: event.currentTarget.value });
        break;

      default:
        break;
    }
    return;
  }

  render() {
    return(
      <div id='login-form'>
        <form onSubmit={this.handleSubmit}>
          <p><input type='email' id='login-email' placeholder='Email'
            value={this.state.email} onChange={this.handleChange} /></p>
          <p><input type='password' id='login-pw' placeholder='Password' /></p>
          <p><button type='submit'>Log In</button></p>
        </form>
      </div>
    );
  }
}