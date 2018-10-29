'use strict';
import * as React from 'react';

export interface IProps {
  email: string,
  token: string,
  resetPassword: (args: {
    email: string, token: string, password: string
  }) => void,
}

export interface IState {
  password: string,
  confPassword: string,
}

export default class ResetPassword extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      password: '',
      confPassword: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (this.state.password !== this.state.confPassword) { return; }
    this.props.resetPassword({
      email: this.props.email,
      token: this.props.token,
      password: this.state.password,
    });
    return;
  }

  public handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    switch (event.currentTarget.id) {
      case 'resetPw-passsword':
        this.setState({ password: event.currentTarget.value });
        break;

      case 'resetPw-conf-passsword':
        this.setState({ confPassword: event.currentTarget.value });
        break;

      default:
        break;
    }
    return;
  }

  componentDidMount() {
    const elem = document.getElementById('resetPw-passsword');
    if (elem !== null) { elem.focus(); }
  }

  render() {
    return(
      <div id='reset-password'>
        <form onSubmit={this.handleSubmit}>
          <p><input type='password' id='resetPw-passsword'
            placeholder='New Password' value={this.state.password}
            onChange={this.handleChange} /></p>
          <p><input type='password' id='resetPw-conf-passsword'
            placeholder='Confirm New Password' value={this.state.confPassword}
            onChange={this.handleChange} /></p>
          <p><button type='submit'>Reset Password</button></p>
        </form>
      </div>
    );
  }
}