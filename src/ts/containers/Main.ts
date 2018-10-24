'use strict';
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import MainComponent from '../components/Main';
import { IState } from '../interfaces/redux';

interface IMapStateToProps {
  componentToRender: 'home' | 'login' | 'register' | 'lostPw',
}

interface IMapDispatchToProps {
}

const mapStateToProps = (state: IState): IMapStateToProps => {
  let renderName: 'home' | 'login' | 'register' | 'lostPw';
  if (state.ui.showLogin) {
    renderName = 'login';
  } else if (state.ui.showRegister) {
    renderName = 'register';
  } else if (state.ui.showHome) {
    renderName = 'home';
  } else if (state.ui.showLostPw) {
    renderName = 'lostPw';
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