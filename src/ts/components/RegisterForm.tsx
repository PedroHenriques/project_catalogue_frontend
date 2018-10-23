'use strict';
import * as React from 'react';

export interface IProps {
  handleSubmit: (
    args: { email: string, password: string, name: string }
  ) => void,
}

export interface IState {
  email: string,
  password: string,
  confPassword: string,
  name: string,
}

export default class RegisterForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
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
          <p><input type='email' id='register-email' placeholder='Email'
            value={this.state.email} onChange={this.handleChange} /></p>
          <p><input type='password' id='register-pw' placeholder='Password'
            value={this.state.password} onChange={this.handleChange} /></p>
          <p><input type='password' id='register-conf-pw'
            placeholder='Confirm Password' value={this.state.confPassword}
            onChange={this.handleChange} /></p>
          <p><input type='text' id='register-name' placeholder='Name'
            value={this.state.name} onChange={this.handleChange} /></p>
          <p><button type='submit'>Register</button></p>
        </form>
      </div>
    );
  }
}