import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import LS from '../../../utils/localStorage'
import { hot } from 'react-hot-loader'
import '../root.global.css'
// import debounce from 'lodash/debounce'

import { configureStore } from '../store'
import App from '../components/App'
// import { getAuthDetails } from '../../auth/selectors';

const authState = LS.getItem('AUTH_STATE')
const persistedState = authState ? { auth: authState } : {}

const store = configureStore(persistedState)

// const saveAuthState = state => {
//   const authState = getAuthDetails(state)
//   LS.setItem('AUTH_STATE', authState)
// }

// store.subscribe(() => {
//   console.log('STORE', ...arguments)
//   saveAuthState(store.getState())
//   debounce(() => saveAuthState(store.getState()), 1000)
// })

const Root = () => (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)

export default hot(module)(Root)
