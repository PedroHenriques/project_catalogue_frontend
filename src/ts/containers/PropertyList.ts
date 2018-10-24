'use strict';
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import PropertyListComponent from '../components/PropertyList';
import { IState } from '../interfaces/redux';
import { IProperty } from '../interfaces/react';

interface IMapStateToProps {
  properties: IProperty[] | null,
}

interface IMapDispatchToProps {
}

const mapStateToProps = (state: IState): IMapStateToProps => {
  return({
    properties: state.properties === null ? null :
      Object.values(state.properties.data),
  });
};

const mapDispatchToProps = (
  dispatch: Dispatch
): IMapDispatchToProps => {
  return({});
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(PropertyListComponent);