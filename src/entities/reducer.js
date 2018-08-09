import merge from 'lodash/merge'
import { ADD_ENTITY } from './constants'

const defaultState = {}

export default (state = defaultState, action) => {
  if (action.type === ADD_ENTITY) {
    return merge({}, state, action.payload)
  }

  return state
}
