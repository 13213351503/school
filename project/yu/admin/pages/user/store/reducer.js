import {CHANGE_ITEM,ADD_ITEM,DEL_ITEM,LOAD_DATA} from './actionType.js'

import { fromJS }  from 'immutable';

const defaultState = fromJS({
		
            list:['吃饭','吃饭','吃饭'],
            task:''
        
})


//1.reducer是一个纯函数(有固定的输入就有固定的输出),主要功能用来处理业务数据
//2.reducer不能直接修改store传递过来的state，因为store中的state,只能由store进行管理，并且store中的state由所有组件所共享
//3.getstate方法所获取的始终是store中的state
//4.reducer修改完数据后会返回一个newState，store会根据这个newState修改自身的state


export default (state=defaultState,action)=>{
	// console.log('state',state)
	// console.log('action',action)
	if (action.type == CHANGE_ITEM) {
		/*
		const newstate = JSON.parse(JSON.stringify(state))
		newstate.task =action.payload
		return newstate
		//错误写法
		// state.task = action.payload;
		*/
		return state.set('task',action.payload)

	}else if (action.type == ADD_ITEM) {
		/*
		const newstate = JSON.parse(JSON.stringify(state))
		newstate.list.push(state.task)
		newstate.task=''
		return newstate
		*/
		// 只能用get才能拿到 再利用扩展运算获得新的数组
		const list = [...state.get('list')]
		list.push(state.get('task'))
		//修改两个以上不能用set
		return state.merge({
			list,
			task:''
		})
	}else if (action.type == DEL_ITEM) {
		/*
		const newstate = JSON.parse(JSON.stringify(state))

		newstate.list.splice(action.payload,1)

		return newstate
		*/
		const list = [...state.get('list')]
		list.splice(action.payload,1)
		return state.set('list',list)
	}else if(action.type == LOAD_DATA){
		/*
		const newState = JSON.parse(JSON.stringify(state))
		newState.list = action.payload
		return newState
		*/
		 return state.set('list',action.payload)
	}
	return state
}