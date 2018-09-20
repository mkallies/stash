import * as types from './constants'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.START_PRODUCTS:
      return { ...state, start: action.payload }

    default:
      return state
  }
}
