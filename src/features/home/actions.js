import { setIsLoading } from '../../common/actions'
import { fetcher } from '../../network'
import * as types from './constants'

export const fetchAllProducts = () => async dispatch => {
  dispatch(setIsLoading('startProducts', true))

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

  dispatch(setIsLoading('startProducts', false))
}
