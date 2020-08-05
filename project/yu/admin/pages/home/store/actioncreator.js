import {SET_COUNTS} from './actionType.js'

import axios from 'axios'
import { message } from 'antd'


export const setCountsAction = (data) =>({
	type:SET_COUNTS,
	payload:data
})
export const getCountsAction =()=>{
	//有了thunk中间件才能处理异步函数 所以在这里面的派发是真正派发
        return (dispatch)=>{
			//发送ajax请求再生成action对象
        	axios({
			method: 'get',
			url: 'http://127.0.0.1:3000/counts',
			withCredentials:true//携带cookies
		})
		.then(result=>{
			console.log(result)
			const data = result.data;
			if(data.code == 0){//登录成功
				//派发action将数据存到store中
				dispatch(setCountsAction(data.data))
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