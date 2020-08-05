import { fromJS } from 'immutable'
const defaultState = fromJS({
	usernum:0,
	ordernum:1,
	productnum:2,
})
import {
	GET_COUNTS
} from './actionTypes.js'

export default (state=defaultState,action)=>{
	if(action.type == GET_COUNTS){
		// console.log(action)
		// 改变多个数据用 merge
		return state.merge({
			usernum:action.payload.usernum,
			ordernum:action.payload.ordernum,
			productnum:action.payload.productnum,
		});
	}
	return state
}