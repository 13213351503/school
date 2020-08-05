/*
* @Author: Chen
* @Date:   2019-12-02 16:52:50
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-12 17:36:36
*/
import axios from 'axios'
import * as types from './actionTypes.js'
import api from 'api'
import { message } from 'antd'


//处理新增分类action
export const getAddCategoriesAction = (values)=>{
	return (dispatch,getState)=>{
		api.addCategories(values)
		.then(result=>{
			// console.log(result)
			const data = result.data
			if(data.code == 0){
				message.success('新增分类成功')
				dispatch(setLevelCategoriesAction(data.data))
			}else{
				message.error(data.message)
			}
		})
		.catch(err=>{
			console.log(err)
		})
	}
}
const setLevelCategoriesAction = (payload)=>({
	type:types.SET_LEVEL_CATEGORIES,
	payload
})
//处理获取最新父级分类数据
export const getLevelCategoriesAction = ()=>{
	return (dispatch,getState)=>{
		api.getLevelCategories({
			level:2
		})
		.then(result=>{
			console.log(result)
			const data = result.data
			if(data.code == 0){
				dispatch(setLevelCategoriesAction(data.data))
			}else{
				message.error('请求失败,请稍后再试!')
			}
		})
		.catch(err=>{
			console.log(err)
		})
	}
}
//处理分类列表分页数据
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
		api.getCategoriesList({
			page:page
		})
		.then(result=>{
			// console.log(result)
			const data = result.data
			if(data.code == 0){
				dispatch(getSetPageAction(data.data))
			}else{
				message.error('请求失败,请稍后再试!')
			}
		})
		.catch(err=>{
			console.log(err)
			message.error('请求失败,请稍后再试!')
		})
		.finally(()=>{
			//请求完毕后loading取消
			dispatch(getPageDoneAction())
		})
	}
}
//处理更新分类名称
export const getUpdateNameAction = (id,newName)=>{
	return (dispatch,getState)=>{
		const page = getState().get('category').get('current')
		api.updateCategoriesName({
			id:id,
			name:newName,
			page:page
		})
		.then(result=>{
			// console.log(result)
			const data = result.data
			if(data.code == 0){
				message.success('更新分类成功')
				dispatch(getSetPageAction(data.data))
			}else{
				message.error('请求失败,请稍后再试!')
			}
		})
		.catch(err=>{
			console.log(err)
			message.error('请求失败,请稍后再试!')
		})
	}
}
//处理更新手机分类名称
export const getUpdateMobileNameAction = (id,newMobileName)=>{
	return (dispatch,getState)=>{
		const page = getState().get('category').get('current')
		api.updateCategoriesMobileName({
			id:id,
			mobileName:newMobileName,
			page:page
		})
		.then(result=>{
			const data = result.data
			if(data.code == 0){
				message.success('更新手机分类成功')
				dispatch(getSetPageAction(data.data))
			}else{
				message.error('请求失败,请稍后再试!')
			}
		})
		.catch(err=>{
			console.log(err)
			message.error('请求失败,请稍后再试!')
		})
	}
}
//处理更新排序
export const getUpdateOrderAction = (id,newOrder)=>{
	return (dispatch,getState)=>{
		const page = getState().get('category').get('current')
		api.updateCategoriesOrder({
			id:id,
			order:newOrder,
			page:page
		})
		.then(result=>{
			const data = result.data
			if(data.code == 0){
				message.success('更新排序分类成功')
				dispatch(getSetPageAction(data.data))
			}else{
				message.error('请求失败,请稍后再试!')
			}
		})
		.catch(err=>{
			console.log(err)
			message.error('请求失败,请稍后再试!')
		})
	}
}
//更新显示隐藏
export const getUpdateIsShowAction = (id,newIsShow)=>{
	return (dispatch,getState)=>{
		const page = getState().get('category').get('current')
		api.updateCategoriesIsShow({
			id:id,
			isShow:newIsShow,
			page:page
		})
		.then(result=>{
			const data = result.data
			if(data.code == 0){
				message.success('更新显示隐藏分类成功')
				dispatch(getSetPageAction(data.data))
			}else{
				message.error('请求失败,请稍后再试!')
			}
		})
		.catch(err=>{
			console.log(err)
			message.error('请求失败,请稍后再试!')
		})
	}
}
