/*
* @Author: Chen
* @Date:   2019-12-05 15:11:29
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-05 15:57:03
*/
import { fromJS } from 'immutable'
const defaultState = fromJS({
	isFetching:false
})
import {
	LOGIN_START_ACTION,
	LOGIN_DONE_ACTION
} from './actionTypes.js'

export default (state=defaultState,action)=>{
	
	if(action.type == LOGIN_START_ACTION){
		
		return state.set('isFetching',true)
	}
	else if(action.type == LOGIN_DONE_ACTION){
		
		return state.set('isFetching',false)
	}
	
	return state
}