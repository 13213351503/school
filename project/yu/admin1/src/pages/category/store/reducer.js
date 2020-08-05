/*
* @Author: Chen
* @Date:   2019-12-05 15:11:29
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-12 16:51:25
*/
import { fromJS } from 'immutable'
const defaultState = fromJS({
	list:[],
	current:0,
	pageSize:0,
	total:0,
	isFecthing:false,
	categories:[]
})
import * as types from './actionTypes.js'

export default (state=defaultState,action)=>{
	//处理分类列表分页数据
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
	//处理获取最新父级分类
	if(action.type == types.SET_LEVEL_CATEGORIES){
		return state.set('categories',fromJS(action.payload))
	}
	return state
}