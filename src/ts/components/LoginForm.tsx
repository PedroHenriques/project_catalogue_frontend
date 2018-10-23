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
  }

  public handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    return;
  }
}