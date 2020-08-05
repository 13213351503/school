/*
* @Author: Chen
* @Date:   2019-12-05 15:11:29
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-08 15:15:46
*/
import { fromJS } from 'immutable'
const defaultState = fromJS({
	isFecthing:false
})
import * as types from './actionTypes.js'

export default (state=defaultState,action)=>{
	if(action.type == types.LOGIN_REQUEST_START){
		return state.set('isFecthing',true)
	}
	if(action.type == types.LOGIN_REQUEST_DONE){
		return state.set('isFecthing',false)
	}
	
	return state
}