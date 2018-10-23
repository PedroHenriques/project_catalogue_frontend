'use strict';
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import RegisterFormComponent from '../components/RegisterForm';
import { register } from '../actions/creators';
import { IState } from '../interfaces/redux';

interface IMapStateToProps {
}

interface IMapDispatchToProps {
  handleSubmit: (
    args: { email: string, password: string, name: string }
  ) => void,
}

const mapStateToProps = (state: IState): IMapStateToProps => {
  return({});
};

const mapDispatchToProps = (
  dispatch: Dispatch
): IMapDispatchToProps => {
  return({
    handleSubmit: (
      args: { email: string, password: string, name: string }
    ): void => {
      dispatch(register({ ...args }));
    },
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(RegisterFormComponent);