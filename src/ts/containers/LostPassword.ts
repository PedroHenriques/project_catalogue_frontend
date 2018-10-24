'use strict';
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import LostPasswordComponent from '../components/LostPassword';
import { requestPwReset } from '../actions/creators';
import { IState } from '../interfaces/redux';

interface IMapStateToProps {
}

interface IMapDispatchToProps {
  handleSubmit: (args: { email: string }) => void,
}

const mapStateToProps = (state: IState): IMapStateToProps => {
  return({});
};

const mapDispatchToProps = (
  dispatch: Dispatch
): IMapDispatchToProps => {
  return({
    handleSubmit: (args: { email: string }): void => {
      dispatch(requestPwReset({ ...args }));
    },
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(LostPasswordComponent);