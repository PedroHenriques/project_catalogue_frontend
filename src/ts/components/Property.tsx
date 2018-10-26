'use strict';
import * as React from 'react';
import { IProperty } from '../interfaces/react';

export interface IProps extends IProperty {}

export default class Property extends React.Component<IProps, {}> {
  render() {
    return(
      <div id={`property-${this.props.id}`} key={`property-${this.props.id}`}
      className='property-card'>
        <p><b>Title:</b> {this.props.title}</p>
        <p><b>Type:</b> {this.props.propertyType}</p>
        <p><b>#Beds:</b> {this.props.numberOfBeds}</p>
        <p><b>Address:</b> {this.props.address}</p>
        <p><b>Country:</b> {this.props.country}</p>
        <p><b>Description:</b> {this.props.description}</p>
        <p><b>Geolocation Lat:</b> {this.props.geoLocationLat}</p>
        <p><b>Geolocation Long:</b> {this.props.geoLocationLong}</p>
      </div>
    );
  }
}