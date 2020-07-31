/*
* @Author: Chen
* @Date:   2019-12-01 17:24:50
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-05 16:00:05
*/
// import { combineReducers } from 'redux'
import {combineReducers} from 'redux-immutable'
import {reducer as todolistReducer} from '../pages/todolist/store/index.js'

export default combineReducers({
	todolist:todolistReducer
})