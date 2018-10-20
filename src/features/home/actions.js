import { setIsLoading } from '../../common/actions'
import { fetcher } from '../../network'
import * as types from './constants'

export const fetchAllProducts = () => async dispatch => {
  dispatch(setIsLoading(types.HOME_PRODUCTS, true))

  const config = {
    method: 'get',
    path: '/start',
  }

  try {
    const { data } = await fetcher({ config })

    dispatch({
      type: types.START_PRODUCTS,
      payload: data,
    })
  } catch (error) {
    console.log('fetchAllProducts error', error)
  }

  dispatch(setIsLoading(types.HOME_PRODUCTS, false))
}

export const searchQuery = query => async dispatch => {
  dispatch(setIsLoading(types.HOME_PRODUCTS, true))

  const config = {
    method: 'get',
    path: '/search',
  }

  console.log(query)

  try {
    const { data } = await fetcher({ config, params: { ...query } })

    dispatch({
      type: types.START_PRODUCTS,
      payload: data,
    })
  } catch (error) {
    console.log('searchQuery error', error)
  }

  dispatch(setIsLoading(types.HOME_PRODUCTS, false))
}
