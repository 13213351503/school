
import axios from 'axios'
import { message } from 'antd'


import {
	SET_COUNTS,
} from './actionTypes.js'
import api from 'api'

export const setCountsAction = (data)=>({
	type:SET_COUNTS,
	payload:data
})


export const getCountsAction = ()=>{
	return (dispatch,getState)=>{
		axios({
			method: 'get',
			url: 'http://127.0.0.1:3000/counts',
			//发送请求的时候携带cookie
			withCredentials:true
		})
		.then(result=>{
			console.log(result);
			
			const data = result.data;
			if(data.code == 0){//登录成功
				//1.派发action将数据存到store中
				dispatch(setCountsAction(data.data))
			}else{//登录失败
				message.error(data.message);
			}
			
		})
		.catch(err=>{
			console.log(err);
			message.error('请求失败，请稍后再试');
		})
		/*
		api.getCounts()
		.then(result=>{
			// console.log(result)
			const data = result.data
			if(data.code == 0){
				//派发action将获取的后台数据存到store
				dispatch(getSetCountAction(data.data))
			}
		})
		.catch(err=>{
			console.log(err)
		})
		*/
	}
}
