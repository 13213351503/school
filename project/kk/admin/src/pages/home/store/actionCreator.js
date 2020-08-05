import axios from 'axios'
import * as types from './actionTypes.js'
import { message } from 'antd';// 引入全局提示,直接用
import apiObj from 'api/index.js';

import { removeLocalStorage } from 'util';
// 定义好的派发action的方法 👇
const setCountsAction = (data) =>({
	type:types.GET_COUNTS,
	payload:data
})

export const getCountsAction = ()=>{
	return (dispatch,getState)=>{
		// 先发送ajax再派送action
		apiObj.getCounts()
		.then(result=>{
			// console.log(result);
			const data = result.data;
			if(data.code == 0){// 验证成功
				// 1.派发action,将数据存到store
				dispatch(setCountsAction(data.data));
			}else{// 验证失败
				message.error(data.message);
			}
			// 前后台用户数据保持一致:
			// 后台清除了session
			if(data.code == 10){
				// 1.清除前台用户数据
				removeLocalStorage();
				// 2.返回到登录页面
				window.location.href="/login";
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('登录失败,请稍候再试!');
		})
		/*
		// 先发送ajax再派送action
		axios({
			method:'get',
			url:'http://127.0.0.1:3000/counts',// 请求的地址
			withCredentials: true,// 把cookie信息发送到后台,验证管理员登录信息
		})
		.then(result=>{
			// console.log(result);
			const data = result.data;
			if(data.code == 0){// 验证成功
				// 1.派发action,将数据存到store
				dispatch(setCountsAction(data.data));
			}else{// 验证失败
				message.error(data.message);
			}
			// 前后台用户数据保持一致:
			// 后台清除了session
			if(data.code == 10){
				// 1.清除前台用户数据
				removeLocalStorage();
				// 2.返回到登录页面
				window.location.href="/login";
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('登录失败,请稍候再试!');
		})
		*/
	}
}