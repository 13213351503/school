/*
* @Author: Chen
* @Date:   2019-12-02 16:52:50
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-03 17:45:26
*/
import axios from 'axios'
import * as types from './actionTypes.js'

export const getChangeItemAction = (val)=>({
	type:types.CHANGE_ITEM,
	payload:val
})
export const getAddItemAction = ()=>({
	type:types.ADD_ITEM
})
export const getDeleteItemAction = (index)=>({
	type:types.DEL_ITEM,
	payload:index
})




const getLoadInitAction = (data) =>({
	type:types.LOAD_DATA,
	payload:data
})

export const getRequestLoadDataAction = ()=>{
	return (dispatch,getState)=>{
		axios.get('http://127.0.0.1:3000')
		.then(result=>{
			//派发action
			dispatch(getLoadInitAction(result.data))
		})
		.catch(err=>{
			console.log(err)
		})
	}
}
