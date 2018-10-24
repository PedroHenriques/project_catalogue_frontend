'use strict';
import * as React from 'react';

export interface IState {
  email: string,
}

export default class LostPassword extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      email: '',
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
      case 'lostPw-email':
        this.setState({ email: event.currentTarget.value });
        break;

      default:
        break;
    }
    return;
  }

  render() {
    return(
      <div id='lost-password'>
        <form onSubmit={this.handleSubmit}>
          <p><input type='email' id='lostPw-email' placeholder='Email'
            value={this.state.email} onChange={this.handleChange} /></p>
        </form>
      </div>
    );
  }
}