import axios from 'axios';

import {
	CHANGE_ITME,
	ADD_ITME,
	DEL_ITME,
	LOAD_ITME
} from './actionType.js';


export const getChangeItemAction = (val)=>({
		type:CHANGE_ITME,
		payload:val
})
export const getAddItemAction = ()=>({
		type:ADD_ITME,
})
export const getDelItemAction = (index)=>({
		type:DEL_ITME,
		payload:index
})
export const getLoadItemAction = (data)=>({
		type:LOAD_ITME,
		payload:data
})
export const getRequestLoadItemAction = ()=>{
		//首先发送请求在生成action对象
	return (dispatch)=>{
		axios.get('http://127.0.0.1:3000')
		.then((data)=>{
			// console.log(data)
			//在这里真正派发action
			dispatch(getLoadItemAction(data.data))
		})
		.catch((err)=>{
			console.log(err);
		})
	}
		
}