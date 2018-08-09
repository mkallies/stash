import { IS_LOADING } from './constants'

const initialState = {
  isLoading: {},
}

export default (state = initialState, action) => {
  if (action.type === IS_LOADING) return handleLoading(state, action)

  return state
}

function handleLoading(state, action) {
  const { isLoading, key } = action.payload

  return { ...state, isLoading: { ...state.isLoading, [key]: isLoading } }
}
