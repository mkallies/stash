import { schema } from 'normalizr'

// Store

export const storeSchema = new schema.Entity(
  'stores',
  {},
  { idAttribute: '_id' }
)

export const storeListSchema = new schema.Array(storeSchema)

// Product

export const productSchema = new schema.Entity(
  'products',
  {},
  { idAttribute: '_id' }
)

export const productListSchema = [productSchema]
