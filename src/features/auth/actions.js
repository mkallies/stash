import { fetcher } from '../../network'

export const fetchUser = () => async dispatch => {
  const config = {
    method: 'get',
    path: '/auth/current_user',
    withCredentials: true,
  }
  try {
    const { data } = await fetcher({ config })

    console.log('data', data)

    dispatch({ type: 'FETCH_USER', payload: data })
  } catch (error) {
    console.log('Error fetching user', error)
  }
}

export const login = () => {}

export const logout = () => {}
