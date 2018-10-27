'use strict';
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import FlashMessagesComponent from '../components/FlashMessages';
import { IState } from '../interfaces/redux';

interface IMapStateToProps {
  messages: string[],
}

interface IMapDispatchToProps {
}

const mapStateToProps = (state: IState): IMapStateToProps => {
  return({
    messages: state.flashMessages,
  });
};

const mapDispatchToProps = (
  dispatch: Dispatch
): IMapDispatchToProps => {
  return({});
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(FlashMessagesComponent);