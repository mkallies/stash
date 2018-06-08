import * as types from './constants'

const initialState = {
  async: false,
  email: '',
  error: undefined,
  isAuthenticated: false,
  userId: undefined
}

export default (state = initialState, action) => {
  console.log("action", action)
  switch (action.type) {
    case types.CREATE_ACCOUNT: {
      return {
        ...state,
        email: action.payload.email,
        async: true,
      }
    }
    case types.CREATE_ACCOUNT_FAILED:
    case types.CREATE_ACCOUNT_SUCCESS: {
      return {
        ...state,
        async: false,
      }
    }

    case types.LOGIN: {
      return {
        ...state,
        email: action.payload.email,
        async: true,
      }
    }
    case types.LOGIN_FAILED: {
      return {
        ...state,
        async: false,
        error: action.error
      }
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        authKey: action.payload.id,
        userId: action.payload.userId,
        async: false,
      }
    }

    default:
      return state
  }
}