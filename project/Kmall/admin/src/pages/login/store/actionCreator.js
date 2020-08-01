import axios from 'axios'
import * as types from './actionTypes.js';
import { message } from 'antd'


export const getChangeItemAction = (val)=>({
	type:types.CHANGE_ITEM,
	payload:val
})
export const getAddItemAction = ()=>({
	type:types.ADD_ITEM
})
export const getDeleteItemAction = (index)=>({
	type:types.DEL_ITEM,
	payload:index
})




const getLoadInitAction = (data) =>({
	type:types.LOAD_DATA,
	payload:data
})

export const getLoginAction = (data)=>{
	return (dispatch,getState)=>{
		data.role = 'admin';
		axios({
			method: 'post',
			url: 'http://127.0.0.1:3000/sessions/users',
			data:data
		})
		.then(result=>{
			// console.log(result);
			const data = result.data;
			if(data.code == 0){
				//返回管理员首页
				window.location.href = '/';
			}else{
				message.error(data.message);
			}
		})
		.catch(err=>{
			console.log(err);
		})
	}
}
