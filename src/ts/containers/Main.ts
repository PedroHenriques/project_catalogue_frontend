'use strict';
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import MainComponent from '../components/Main';
import { IState } from '../interfaces/redux';

interface IMapStateToProps {
  componentToRender: 'home' | 'login' | 'register',
}

interface IMapDispatchToProps {
}

const mapStateToProps = (state: IState): IMapStateToProps => {
  let renderName: 'home' | 'login' | 'register';
  if (state.ui.showLogin) {
    renderName = 'login';
  } else if (state.ui.showRegister) {
    renderName = 'register';
  } else if (state.ui.showHome) {
    renderName = 'home';
  } else {
    renderName = 'home';
  }

  return({
    componentToRender: renderName,
  });
};

const mapDispatchToProps = (
  dispatch: Dispatch
): IMapDispatchToProps => {
  return({});
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(MainComponent);