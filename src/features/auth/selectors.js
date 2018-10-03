export const getUser = state => state.auth.user || false
export const getIsAuthenticated = state => Boolean(getUser(state))
