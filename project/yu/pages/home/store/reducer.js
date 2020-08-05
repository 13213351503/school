import {CHANGE_ITEM,ADD_ITEM,DEL_ITEM,LOAD_DATA} from './actionType.js'

import { fromJS }  from 'immutable';

const defaultState = fromJS({
        usernum:0,
        ordernum:0,
        productnum:0
        
})

import * as types from './actionType.js'
//1.reducer是一个纯函数(有固定的输入就有固定的输出),主要功能用来处理业务数据
//2.reducer不能直接修改store传递过来的state，因为store中的state,只能由store进行管理，并且store中的state由所有组件所共享
//3.getstate方法所获取的始终是store中的state
//4.reducer修改完数据后会返回一个newState，store会根据这个newState修改自身的state


export default (state=defaultState,action)=>{
	// console.log('state',state)
	// console.log('action',action)
	if (action.type == types.SET_COUNTS) {
		
		return state.merge({
			usernum:action.payload.usernum,
	        ordernum:action.payload.ordernum,
	        productnum:action.payload.productnum
		})

	}
	return state
}