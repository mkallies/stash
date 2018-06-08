import axios from 'axios'

function fokoud({ config, data, params }) {
  return axios({
    data,
    method: config.method,
    url: config.path,
    params,
  })
}

export { fokoud }