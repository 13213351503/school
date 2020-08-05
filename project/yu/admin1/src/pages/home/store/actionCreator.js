/*
* @Author: Chen
* @Date:   2019-12-02 16:52:50
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-10 19:02:13
*/
import axios from 'axios'
import * as types from './actionTypes.js'
import api from 'api'


const getSetCountAction = (payload) =>({
	type:types.SET_COUNT,
	payload
})

export const getCountAction = ()=>{
	return (dispatch,getState)=>{
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
		/*
		axios({
			method:'get',
			url:'http://127.0.0.1:3000/counts',
			withCredentials:true
		})
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
