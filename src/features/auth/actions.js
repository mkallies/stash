import { fetcher } from '../../network'
import { toast } from 'react-toastify'
import pick from 'lodash/pick'
import * as types from './constants'

export const fetchUser = () => async dispatch => {
  const config = {
    method: 'get',
    path: '/auth/current_user',
  }

  try {
    const { data } = await fetcher({ config })

    dispatch({ type: types.FETCH_USER, payload: data })
  } catch (error) {
    console.log('Error fetching user', error)
  }
}

export const createAccount = user => async dispatch => {
  const config = {
    method: 'post',
    path: '/auth/create-account',
  }

  const userData = pick(user, ['email', 'firstName', 'lastName', 'password'])

  try {
    const { data } = await fetcher({ config, data: userData })

    dispatch({ type: types.CREATE_ACCOUNT_SUCCESS, payload: data })
  } catch (error) {
    console.log('Error creating user', error.message)
    toast.error(error.message)
  }
}

export const login = user => async dispatch => {
  const config = {
    method: 'post',
    path: '/auth/login',
  }

  try {
    const { data } = await fetcher({ config, data: user })

    dispatch({ type: types.LOGIN_SUCCESS, payload: data })
  } catch (error) {
    console.log('Error logging in', error)
    toast.error(error.message)
  }
}

export const logout = () => async dispatch => {
  const config = {
    method: 'get',
    path: '/auth/logout',
  }

  try {
    await fetcher({ config })

    dispatch({ type: types.LOGOUT })
  } catch (error) {
    console.log('Error logout', error)
    toast.error(error.message)
  }
}
