import { fetcher } from '../../network'
import { setIsLoading } from '../../common/actions'
import { experiences } from '../../data/mockData'
import { addEntity } from '../../entities/actions'

export const fetchExperiences = () => dispatch => {
  dispatch(setIsLoading('experiences', true))

  // fetch here
  dispatch(addEntity({ experiences }))

  dispatch(setIsLoading('experiences', false))
}

export const fetchAllProducts = () => async dispatch => {
  dispatch(setIsLoading('allProducts', true))

  const config = {
    method: 'get',
    path: '/start',
  }

  const { data } = await fetcher({ config })

  console.log(data)

  dispatch(setIsLoading('allProducts', false))
}
