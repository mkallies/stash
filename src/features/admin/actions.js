import { fetcher } from '../../network'
import * as types from './constants'
import { setIsLoading } from '../../common/actions'
import { addEntity } from '../../entities/actions'
import { normalize } from 'normalizr'
import { storeListSchema } from '../../entities/schemas'
import { toast } from 'react-toastify'

export const saveStore = ({
  containerClass,
  storeName,
  storeUrl,
  categoryPath = types.CAT_PATH_DEFAULT,
  shopPath = types.SHOP_PATH_DEFAULT,
}) => async dispatch => {
  dispatch(setIsLoading('stores', true))

  const config = {
    method: 'post',
    path: '/store',
  }

  try {
    const res = await fetcher({
      config,
      data: { storeName, storeUrl, categoryPath, shopPath, containerClass },
    })

    toast.success('Store saved')

    dispatch({
      type: types.SCRAPE_STORE,
      payload: res,
    })
  } catch (error) {
    console.log('Error', error)
  }

  dispatch(setIsLoading('stores', false))
}

export const getStores = () => async dispatch => {
  dispatch(setIsLoading('stores', true))

  const config = {
    method: 'get',
    path: '/store',
  }

  try {
    const { data } = await fetcher({
      config,
    })

    const { entities } = normalize(data, storeListSchema)

    dispatch(addEntity(entities))
  } catch (error) {
    console.log('error', error)
  }

  dispatch(setIsLoading('stores', false))
}

export const scrapeStores = store => dispatch => {
  const config = {
    method: 'post',
    path: '/utils/scraper',
  }

  fetcher({
    config,
    data: store,
  })

  dispatch({
    type: 'ok',
  })
}
