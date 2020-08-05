/*
* @Author: Chen
* @Date:   2019-12-02 16:52:50
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-11 18:53:44
*/
import axios from 'axios'
import * as types from './actionTypes.js'
import api from 'api'

const getPageStartAction = () =>({
	type:types.PAGE_REQUEST_START
})
const getPageDoneAction = () =>({
	type:types.PAGE_REQUEST_DONE
})
const getSetPageAction = (payload) =>({
	type:types.SET_PAGE,
	payload
})

export const getPageAction = (page)=>{
	return (dispatch,getState)=>{
		//发送请求前显示loading
		dispatch(getPageStartAction())
		api.getUserList({
			page:page
		})
		.then(result=>{
			console.log(result)
			const data = result.data
			if(data.code == 0){
				dispatch(getSetPageAction(data.data))
			}
		})
		.catch(err=>{
			console.log(err)
		})
		.finally(()=>{
			//请求完毕后loading取消
			dispatch(getPageDoneAction())
		})
	}
}
