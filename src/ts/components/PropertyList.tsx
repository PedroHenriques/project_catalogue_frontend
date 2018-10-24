'use strict';
import * as React from 'react';
import { IProperty } from '../interfaces/react';

export interface IProps {
  properties: IProperty[] | null,
}

export interface IState {
  renderMap: boolean,
}

export default class PropertyList extends React.Component<IProps, IState> {
  private timeoutId: NodeJS.Timeout | null = null;

  constructor(props: IProps) {
    super(props);

    this.state = {
      renderMap: typeof google !== 'undefined',
    };

    this.checkGoogleMap = this.checkGoogleMap.bind(this);
  }

  private checkGoogleMap(): void {
    if (typeof google !== 'undefined') {
      this.setState({ renderMap: true });
    } else {
      this.timeoutId = global.setTimeout(() => {
        this.checkGoogleMap();
      }, 1000);
    }
  }

  componentDidMount() {
    this.checkGoogleMap();
  }

  componentWillUnmount() {
    if (this.timeoutId !== null) {
      global.clearTimeout(this.timeoutId);
    }
  }

  render() {
    let map: google.maps.Map | null = null;
    if (this.state.renderMap) {
      try {
        map = new google.maps.Map(
          document.getElementById('map'), { zoom: 4 }
        );
      } catch (error) {
        map = null;
      }
    }

    let children: JSX.Element[] = [];
    if (this.props.properties !== null) {
      children = this.props.properties.map(property => {
        if (map !== null) {
          const Marker = new google.maps.Marker({
            position: {
              lat: property.geoLocationLat,
              lng:  property.geoLocationLong
            },
            map,
          });
        }

        return(
        <div id={`property-${property.id}`} key={`property-${property.id}`}
        className='property-card'>
          <p><b>Title:</b> {property.title}</p>
          <p><b>Type:</b> {property.propertyType}</p>
          <p><b>#Beds:</b> {property.numberOfBeds}</p>
          <p><b>Address:</b> {property.address}</p>
          <p><b>Country:</b> {property.country}</p>
          <p><b>Description:</b> {property.description}</p>
          <p><b>Geolocation Lat:</b> {property.geoLocationLat}</p>
          <p><b>Geolocation Long:</b> {property.geoLocationLong}</p>
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