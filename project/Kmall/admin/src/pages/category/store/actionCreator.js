
import axios from 'axios'
import * as types from './actionTypes.js'
import { message } from 'antd'
import apiObj from 'api'

export const setPageAction = (val)=>({
	type:types.SET_PAGE,
	payload:val
})

const getLoadInitAction = (data) =>({
	type:types.LOAD_DATA,
	payload:data
})
export const getCountsStartAction = ()=>({
	type:types.COUNTS_START_ACTION,
})
export const getCountsDoneAction = ()=>({
	type:types.COUNTS_DONE_ACTION,
})

export const getPageAction = (page)=>{
	return (dispatch,getState)=>{
		//发送请求之前显示登录loading状态
		dispatch(getCountsStartAction())
		apiObj.getUserList({
			page:page
		})
		.then(result=>{
			console.log(result)
			const data = result.data;
			if(data.code == 0){//登录成功
				dispatch(setPageAction(data.data))
			}else{//登录失败
				message.error(data.message)
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('请求失败,请稍后再试!!')
		})
		.finally(()=>{
			//无论请求成功或者失败取消loading状态
			dispatch(getCountsDoneAction())
		})
		
	}
}
