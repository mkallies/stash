const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'blah':
      return { ...state }

    default:
      return state
  }
}
