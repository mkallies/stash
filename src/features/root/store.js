import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import rootReducer from './rootReducer'
import rootEpic from './rootEpic'

const epicMiddleware = createEpicMiddleware(rootEpic)

export const configureStore = persistedState => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    ),
  )

  return store
}