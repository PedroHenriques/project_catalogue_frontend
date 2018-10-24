'use strict';
import { schema } from 'normalizr';

const propertySchema = new schema.Entity('properties');
export const propertiesSchema = new schema.Array(propertySchema);