import {
	CHANGE_ITME,
	ADD_ITME,
	DEL_ITME,
	LOAD_ITME
} from './actionType.js'


const defaultState = {
			list:['包子','油膜','胡辣汤'],
			task:''
		}

//1.reducer是一个纯函数(有固定的输入就有固定的输出),主要功能用来处理业务数据
//2.reducer不能直接修改store传递过来的state，因为store中的state,只能由store进行管理，并且store中的state由所有组件所共享
//3.getstate方法所获取的始终是store中的state
//4.reducer修改完数据后会返回一个newState，store会根据这个newState修改自身的state

export default (state=defaultState,action)=>{
	// console.log(state)
	// console.log(action)
	if(action.type == CHANGE_ITME){
		// state.task = action.payload;
		let newState = JSON.parse(JSON.stringify(state));
		newState.task = action.payload;
		return newState;
	}else if(action.type == ADD_ITME){
		let newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.task);
		newState.task = '';
		return newState
	}else if(action.type == DEL_ITME){
		let newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.payload,1);
		return newState
	}else if(action.type == LOAD_ITME){
		let newState = JSON.parse(JSON.stringify(state));
		newState.list = action.payload
		return newState
	}

	return state
}