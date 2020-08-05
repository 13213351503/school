
import { fromJS } from 'immutable'
const defaultState = fromJS({
	list:[{
		key:1,
	    username: '用户名',
	    isAdmin: true,
	    email: '111',
	    phone: '111',
	    createdAt:''
	}],
})
import * as types from './actionTypes.js'

export default (state=defaultState,action)=>{
	if(action.type == types.SET_PAGE){
		return state.set('list',fromJS(action.payload.list))
	}
	return state
}