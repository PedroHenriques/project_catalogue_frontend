'use strict';
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import MainComponent from '../components/Main';
import { IState } from '../interfaces/redux';

interface IMapStateToProps {
  componentToRender: 'home' | 'login' | 'register' | 'lostPw' | 'resetPw',
}

interface IMapDispatchToProps {
}

const mapStateToProps = (state: IState): IMapStateToProps => {
  const renderName = state.ui.pageToShow;

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