import { schema } from 'normalizr'

// Store

export const storeSchema = new schema.Entity(
  'stores'
)

export const storeListSchema = new schema.Array(storeSchema)

// Product

export const productSchema = new schema.Entity(
  'products'
)

export const productListSchema = [productSchema]
