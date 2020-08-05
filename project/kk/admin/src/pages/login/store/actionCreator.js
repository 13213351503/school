import axios from 'axios'
import { setLocalStorage } from 'util';
import { message } from 'antd';// 引入全局提示,直接用
import apiObj from 'api/index.js';

import {
	LOGIN_START_ACTIOIN,
	LOGIN_DONE_ACTIOIN
} from './actionTypes.js'

// 定义好的派发action的方法  👇
const getLoginStartAction = () =>({
	type:LOGIN_START_ACTIOIN,
})
const getLoginDoneAction = () =>({
	type:LOGIN_DONE_ACTIOIN,
})

export const getLoginAction = (data)=>{
	return (dispatch,getState)=>{
		// 发送ajax前,先派发action改变登录状态
		dispatch(getLoginStartAction());
		data.role = 'admin';
		// 先发送ajax再派送action
		apiObj.login(data)
		.then(result=>{
			// console.log(result);
			const data = result.data;
			if(data.code == 0){// 登陆成功、
				// 1.保存用户状态
				setLocalStorage(data.data.username)
				// 2.登录成功,跳转到管理员首页
				window.location.href = '/';
			}else{// 登录失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('登录失败,请稍候再试!');
		})
		.finally(()=>{
			// 无论请求成功还是失败,取消登陆doading状态
			dispatch(getLoginDoneAction());
		})

		/*
		// 先发送ajax再派送action
		axios({
			method:'post',
			url:'http://127.0.0.1:3000/sessions/users',// 请求的地址
			data:data,
			withCredentials: true,// 登录账号时,把cookie信息发送到后台,验证管理员登录信息
		})
		.then(result=>{
			// console.log(result);
			const data = result.data;
			if(data.code == 0){// 登陆成功、
				// 1.保存用户状态
				setLocalStorage(data.data.username)
				// 2.登录成功,跳转到管理员首页
				window.location.href = '/';
			}else{// 登录失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('登录失败,请稍候再试!');
		})
		.finally(()=>{
			// 无论请求成功还是失败,取消登陆doading状态
			dispatch(getLoginDoneAction());
		})
		*/
	}
}
