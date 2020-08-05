import { fromJS } from 'immutable'
const defaultState = fromJS({
	list:[],
	total:100,
	pageSize:5,
	current:1  
})
import * as types from './actionTypes.js';

export default (state=defaultState,action)=>{
	if(action.type == types.GET_PAGE){
		// 将数据返回给页面(store → 页面)
		// 转化成immutable数据
		return state.merge({
			list:fromJS(action.payload.list),
			total:action.payload.total,
			pageSize:action.payload.pageSize,
			current:action.payload.current,
		});
	}
	return state
}