import axios from 'axios'

function fetcher({ config, data, params }) {
  return axios({
    data,
    method: config.method,
    url: config.path,
    params,
  })
}

export { fetcher }
