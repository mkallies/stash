import { combineReducers } from 'redux'
import auth from '../auth/reducer'
import common from '../../common/reducer'
import entities from '../../entities/reducer'

export default combineReducers({ auth, common, entities })
