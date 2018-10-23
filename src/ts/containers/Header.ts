'use strict';
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import HeaderComponent from '../components/Header';
import { IState } from '../interfaces/redux';

interface IMapStateToProps {
  userLoggedIn: boolean,
}

interface IMapDispatchToProps {
}

const mapStateToProps = (state: IState): IMapStateToProps => {
  return({
    userLoggedIn: state.user.isLoggedIn,
  });
};

const mapDispatchToProps = (
  dispatch: Dispatch
): IMapDispatchToProps => {
  return({});
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(HeaderComponent);