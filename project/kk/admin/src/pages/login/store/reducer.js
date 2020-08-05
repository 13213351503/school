import { fromJS } from 'immutable'
const defaultState = fromJS({
	isFetching:false
})
import {
	LOGIN_START_ACTIOIN,
	LOGIN_DONE_ACTIOIN
} from './actionTypes.js'

export default (state=defaultState,action)=>{
	if(action.type == LOGIN_START_ACTIOIN){
		// 改变一个数据直接用set
		return state.set('isFetching',true)
	}
	else if(action.type == LOGIN_DONE_ACTIOIN){
		return state.set('isFetching',false)
	}
	return state
}