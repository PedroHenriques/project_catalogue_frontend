'use strict';
import * as React from 'react';
import { IProperty } from '../interfaces/react';

export interface IProps {
  properties: IProperty[] | null,
}

export default class PropertyList extends React.Component<IProps, {}> {
  render() {
    let children: JSX.Element[] = [];
    if (this.props.properties !== null) {
      children = this.props.properties.map(property => {
        return(
        <div id={`property-${property.id}`} key={`property-${property.id}`}
        className='property-card'>
          <p><b>Title:</b> {property.title}</p>
          <p><b>Type:</b> {property.propertyType}</p>
          <p><b>#Beds:</b> {property.numberOfBeds}</p>
          <p><b>Address:</b> {property.address}</p>
          <p><b>Country:</b> {property.country}</p>
          <p><b>Description:</b> {property.description}</p>
          <p><b>Geolocation:</b> {property.geoLocation}</p>
        </div>
        );
      });
    }

    return(
      <div id='property-list'>
        {children}
      </div>
    );
  }
}