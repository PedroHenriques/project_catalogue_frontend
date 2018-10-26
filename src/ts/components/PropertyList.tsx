'use strict';
import * as React from 'react';
import Property from './Property';
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
          <Property
            key={property.id}
            id={property.id}
            title={property.title}
            propertyType={property.propertyType}
            numberOfBeds={property.numberOfBeds}
            address={property.address}
            country={property.country}
            description={property.description}
            geoLocationLat={property.geoLocationLat}
            geoLocationLong={property.geoLocationLong}
          />
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