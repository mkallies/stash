import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL || 'http://localhost:5000'

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
