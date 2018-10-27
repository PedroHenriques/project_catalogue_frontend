'use strict';

export interface IProperty {
  id: number,
  title: string,
  numberOfBeds: number,
  address: string,
  geoLocationLat: number,
  geoLocationLong: number,
  description: string | null,
  propertyType: string,
  country: string,
}

export interface IFlashMessage {
  message: string,
  type: 'success' | 'error' | 'info',
}