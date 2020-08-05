import axios from 'axios'
import * as types from './actionType.js'
import { message } from 'antd'
import { saveUsername } from 'util'
import {
	LOGIN_START_ACTION,
	LOGIN_DONE_ACTION
} from './actionType.js'


export const getLoginStartAction = ()=>({
	type:LOGIN_START_ACTION
})
export const getLoginDoneAction = ()=>({
	type:LOGIN_DONE_ACTION
})

export const getLoginAction = (data)=>{
	return (dispatch,getState)=>{
		//发送请求之前显示登录loding状态
		dispatch(getLoginStartAction())
		data.role ='admin'
		axios({
			method:'post',
			url:'http://127.0.0.1:3000/sessions/users',
			data:data,
			withCredentials:true//携带cookies
		})
		.then(result=>{
			// console.log(result)
			//派发action
			const data = result.data;
			if(data.code == 0){
				//1.将用户信息保存在前台
				saveUsername(data.data.username)
				//2.登录成功回到后台管理页面
				window.location.href ='/'
			}else{
				message.error(data.message)
			}
		})
		.catch(err=>{
			console.log(err)
		})
		.finally(()=>{
		//无论请求成功或者失败取消loading状态
		dispatch(getLoginDoneAction())
		})
	}
}
