'use strict';

export interface IProperty {
  id: number,
  title: string,
  numberOfBeds: number,
  address: string,
  geoLocation: number,
  description: string | null,
  propertyType: string,
  country: string,
}