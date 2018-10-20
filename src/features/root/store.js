import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

export const configureStore = persistedState => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const middlewares = [thunk]

  if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger')

    middlewares.push(logger)
  }

  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  return store
}
