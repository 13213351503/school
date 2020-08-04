// import { combineReducers } from 'redux'
import {combineReducers} from 'redux-immutable'
// import {reducer as todolistReducer} from 'pages/todolist/store/index.js'
import {reducer as loginReducer} from 'pages/login/store/index.js'
import {reducer as homeReducer} from 'pages/home/store/index.js'
import {reducer as userReducer} from 'pages/user/store/index.js'

export default combineReducers({
	login:loginReducer,
	home:homeReducer,
	user:userReducer
})