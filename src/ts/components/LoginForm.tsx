'use strict';
import * as React from 'react';
import Link from 'redux-first-router-link';

export interface IProps {
  handleSubmit: (args: { email: string, password: string }) => void,
}

export interface IState {
  email: string,
  password: string,
}

export default class LoginForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
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
    this.props.handleSubmit({ ...this.state });
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

  componentDidMount() {
    const elem = document.getElementById('login-email');
    if (elem !== null) { elem.focus(); }
  }

  render() {
    return(
      <div id='login-form'>
        <form onSubmit={this.handleSubmit}>
          <p><input type='email' id='login-email' placeholder='Email'
            value={this.state.email} onChange={this.handleChange} /></p>
          <p><input type='password' id='login-pw' placeholder='Password'
            value={this.state.password} onChange={this.handleChange} /></p>
            <p><Link to='/lostPassword'>Lost Password</Link></p>
          <p><button type='submit'>Log In</button></p>
        </form>
      </div>
    );
  }
}