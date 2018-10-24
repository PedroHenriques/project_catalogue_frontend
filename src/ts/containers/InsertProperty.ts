'use strict';
import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import InsertPropertyComponent from '../components/InsertProperty';
import { insertProperty } from '../actions/creators';
import { IState } from '../interfaces/redux';

interface IMapStateToProps {
}

interface IMapDispatchToProps {
  insertProperty: (args: {
    title: string, numberOfBeds: string, address: string, geoLocation: string,
    description?: string, typeId: string, countryId: string,
  }) => void,
}

const mapStateToProps = (state: IState): IMapStateToProps => {
  return({});
};

const mapDispatchToProps = (
  dispatch: Dispatch
): IMapDispatchToProps => {
  return({
    insertProperty: (
      args: {
        title: string, numberOfBeds: string, address: string, countryId: string,
        geoLocation: string, description?: string, typeId: string,
      }
    ): void => {
      dispatch(insertProperty({ ...args }));
    },
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(InsertPropertyComponent);