
import { fromJS } from 'immutable'
const defaultState = fromJS({
	list:[],
	total:50,
	pageSize:10,
	current:1,
	isFetching:false
})
import * as types from './actionTypes.js'

export default (state=defaultState,action)=>{
	if(action.type == types.SET_PAGE){
		return state.merge({
			list:fromJS(action.payload.list),
			total:action.payload.total,
			pageSize:action.payload.pageSize,
			current:action.payload.current
		})
	}
	if(action.type == types.COUNTS_START_ACTION){
		
		return state.set('isFetching',true)
	}
	else if(action.type == types.COUNTS_DONE_ACTION){
		
		return state.set('isFetching',false)
	}
	return state
}