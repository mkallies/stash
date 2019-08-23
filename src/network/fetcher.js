import axios from 'axios'

const BASE_URL =
  'https://stash-backend.herokuapp.com' ||
  process.env.BASE_URL ||
  'http://localhost:4500'

axios.defaults.baseURL = BASE_URL

async function fetcher(config) {
  console.log({ config })
  return axios({
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': 'https://stash-backend.herokuapp.com',
    },
    ...config,
  })
}

export { fetcher }
