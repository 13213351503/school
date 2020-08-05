
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

export const getPageAction = (page)=>{
	return (dispatch,getState)=>{
		//发送请求之前显示loading状态
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
		
	}
}
