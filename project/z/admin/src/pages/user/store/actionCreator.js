import axios from 'axios';
import * as types from './actionTypes.js';
import apiObj from 'api/index.js';
import { message } from 'antd';// 引入全局提示,直接用

export const getChangeItemAction = (val)=>({
	type:types.CHANGE_ITEM,
	payload:val
})

// 获取 用户数据分页
const setPageAction = (data) =>({
	type:types.GET_PAGE,
	payload:data
})
// 配置分页器数据
const setCountsAction = (data) =>({
	type:types.SET_COUNTS,
	payload:data
})

export const getPageAction = (page)=>{
	return (dispatch,getState)=>{
		// 先发送ajax再派送action
		apiObj.getUserList(page)
		.then(result=>{
			// console.log(result);
			const data = result.data;
			if(data.code == 0){// 验证成功
				// 1.派发action,将数据存到store
				// 获取用户数据
				dispatch(setPageAction(data.data));
				// 配置分页器
				dispatch(setCountsAction(data.data));
			}else{// 验证失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('验证失败,请稍候再试!');
		})
	}
}
