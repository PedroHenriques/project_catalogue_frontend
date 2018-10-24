'use strict';
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ResetPasswordComponent from '../components/ResetPassword';
import { resetPw } from '../actions/creators';
import { IState } from '../interfaces/redux';

interface IMapStateToProps {
  email: string,
  token: string,
}

interface IMapDispatchToProps {
  resetPassword: (args: {
    email: string, token: string, password: string
  }) => void,
}

const mapStateToProps = (state: IState): IMapStateToProps => {
  if (state.resetPW === null) {
    return({
      email: '',
      token: '',
    });
  } else {
    return({ ...state.resetPW });
  }
};

const mapDispatchToProps = (
  dispatch: Dispatch
): IMapDispatchToProps => {
  return({
    resetPassword: (
      args: { email: string, token: string, password: string }
    ): void => {
      dispatch(resetPw({ ...args }));
    },
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(ResetPasswordComponent);