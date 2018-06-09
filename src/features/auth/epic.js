import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'
import * as types from './constants'
import { request } from '../../network/request'

// LOGIN

const loginSuccess = data => {
  // api.setToken(data.id)

  return {
    type: types.LOGIN_SUCCESS,
    payload: data,
  }
}

const loginError = error => Observable.of({ type: types.LOGIN_FAILED, error })

export const loginEpic = action$ =>
  action$.ofType(types.LOGIN).mergeMap(action =>
    Observable.fromPromise(request(action.payload))
      .map(({ data }) => loginSuccess(data))
      .catch(loginError)
  )

// CREATE ACCOUNT

const createSuccess = ({ data }) => ({
  type: types.CREATE_ACCOUNT_SUCCESS,
  payload: data,
})

const createError = error => Observable.of({ type: types.LOGIN_FAILED, error })

export const createEpic = action$ =>
  action$.ofType(types.CREATE_ACCOUNT).mergeMap(action =>
    Observable.fromPromise(request(action.payload))
      .map(createSuccess)
      .catch(createError)
  )

export default combineEpics(loginEpic, createEpic)
