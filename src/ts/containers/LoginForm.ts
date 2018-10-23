'use strict';
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import LoginFormComponent from '../components/LoginForm';
import { authenticate } from '../actions/creators';
import { IState } from '../interfaces/redux';

interface IMapStateToProps {
}

interface IMapDispatchToProps {
  handleSubmit: (args: { email: string, password: string }) => void,
}

const mapStateToProps = (state: IState): IMapStateToProps => {
  return({});
};

const mapDispatchToProps = (
  dispatch: Dispatch
): IMapDispatchToProps => {
  return({
    handleSubmit: (args: { email: string, password: string }): void => {
      dispatch(authenticate({ ...args }));
    },
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(LoginFormComponent);