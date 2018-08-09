import { ADD_ENTITY } from './constants'

export const addEntity = entity => ({
  type: ADD_ENTITY,
  payload: entity,
})
