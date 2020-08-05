/*
* @Author: Chen
* @Date:   2019-12-05 15:11:29
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-11 18:52:45
*/
import { fromJS } from 'immutable'
const defaultState = fromJS({
	list:[],
	usernum:0,
	ordernum:0,
	productnum:0,
	current:0,
	pageSize:0,
	total:0,
	isFecthing:false
})
import * as types from './actionTypes.js'

export default (state=defaultState,action)=>{
	if(action.type == types.SET_PAGE){
		return state.merge({
			list:fromJS(action.payload.list),
			current:action.payload.current,
			pageSize:action.payload.pageSize,	
			total:action.payload.total,
		})
	}
	if(action.type == types.PAGE_REQUEST_START){
		return state.set('isFecthing',true)
	}
	if(action.type == types.PAGE_REQUEST_DONE){
		return state.set('isFecthing',false)
	}
	return state
}