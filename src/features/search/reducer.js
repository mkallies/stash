import * as types from './constants'

const initialState = {
  results: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_PRODUCTS:
      return { results: action.payload }

    default:
      return state
  }
}
