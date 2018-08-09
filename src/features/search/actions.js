import { setIsLoading } from '../../common/actions'
import { experiences } from '../../data/mockData'
import { addEntity } from '../../entities/actions'

export const fetchExperiences = () => dispatch => {
  dispatch(setIsLoading('experiences', true))

  // fetch here
  dispatch(addEntity({ experiences }))

  dispatch(setIsLoading('experiences', false))
}
