import { fetcher } from '../../network'
import { setIsLoading } from '../../common/actions'
import * as types from './constants'

export const searchQuery = query => async dispatch => {
  dispatch(setIsLoading('searching', true))

  const config = {
    method: 'get',
    path: '/search',
  }

  console.log(query)

  try {
    const { data } = await fetcher({ config, params: { ...query } })

    console.log('data', data)
    dispatch({
      type: types.SEARCH_PRODUCTS,
      payload: data,
    })
  } catch (error) {
    console.log('searchQuery error', error)
  }

  dispatch(setIsLoading('searching', false))
}
