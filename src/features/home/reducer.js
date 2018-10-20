import * as types from './constants'

const initialState = {
  results: [],
  start: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.START_PRODUCTS:
      return { ...state, start: action.payload }

    case types.SEARCH_PRODUCTS:
      return { results: action.payload }

    default:
      return state
  }
}
