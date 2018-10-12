import axios from 'axios'
import { BASE_URL } from '../common/constants'

axios.defaults.baseURL = BASE_URL

function fetcher({ config, data, params }) {
  return axios({
    data,
    method: config.method,
    url: config.path,
    params,
    withCredentials: true,
  })
}

export { fetcher }
