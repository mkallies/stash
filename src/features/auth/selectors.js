import isEmpty from 'lodash/isEmpty'

export const getUser = state =>
  isEmpty(state.auth.user) ? false : state.auth.user
export const getIsAuthenticated = state => Boolean(getUser(state))
