'use strict';
import * as React from 'react';

export interface IProps {
  insertProperty: (args: {
    title: string, numberOfBeds: string, address: string, geoLocation: string,
    description: string, typeId: string, countryId: string,
  }) => void,
}

export interface IState {
  title: string,
  numberOfBeds?: number,
  address: string,
  geoLocation: string,
  description: string,
  typeId: string,
  countryId: string,
}

export default class InsertProperty extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      title: '',
      address: '',
      geoLocation: '',
      description: '',
      typeId: '1',
      countryId: '1',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (this.state.numberOfBeds === undefined) { return; }
    this.props.insertProperty({
      title: this.state.title,
      numberOfBeds: `${this.state.numberOfBeds}`,
      address: this.state.address,
      geoLocation: this.state.geoLocation,
      description: this.state.description,
      typeId: this.state.typeId,
      countryId: this.state.countryId,
    });
    return;
  }

  public handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement |
      HTMLSelectElement>
  ): void {
    switch (event.currentTarget.id) {
      case 'insert-title':
        this.setState({ title: event.currentTarget.value });
        break;

      case 'insert-num-beds':
        this.setState({
          numberOfBeds: parseInt(event.currentTarget.value, 10),
        });
        break;

      case 'insert-address':
        this.setState({ address: event.currentTarget.value });
        break;

      case 'insert-geolocation':
        this.setState({ geoLocation: event.currentTarget.value });
        break;

      case 'insert-description':
        this.setState({ description: event.currentTarget.value });
        break;

      case 'insert-type':
        this.setState({ typeId: event.currentTarget.value });
        break;

      case 'insert-country':
        this.setState({ countryId: event.currentTarget.value });
        break;

      default:
        break;
    }
    return;
  }

  render() {
    return(
      <div id='insert-property'>
        <form onSubmit={this.handleSubmit}>
          <p><input type='text' id='insert-title' maxLength={100}
            onChange={this.handleChange} value={this.state.title}
            placeholder='Title' /></p>
          <p><input type='number' id='insert-num-beds' min={1}
            onChange={this.handleChange} value={this.state.numberOfBeds || ''}
            placeholder='Number of beds' /></p>
          <p><input type='text' id='insert-address'
            onChange={this.handleChange} value={this.state.address}
            placeholder='Address' /></p>
          <p><input type='text' id='insert-geolocation'
            onChange={this.handleChange} value={this.state.geoLocation}
            placeholder='Geo Location' /></p>
          <p><textarea id='insert-description' onChange={this.handleChange}
            value={this.state.description} placeholder='Description' /></p>
          <p><select id='insert-type' value={this.state.typeId}
          onChange={this.handleChange} placeholder='Property Type'>
            <option value='1'>Villa</option>
            <option value='2'>House</option>
            <option value='3'>Apartment</option>
          </select></p>
          <p><select id='insert-country' value={this.state.countryId}
          onChange={this.handleChange} placeholder='Country'>
            <option value='1'>Portugal</option>
            <option value='2'>United Kingdom</option>
          </select></p>
          <p><button type='submit'>Insert Property</button></p>
        </form>
      </div>
    );
  }
}