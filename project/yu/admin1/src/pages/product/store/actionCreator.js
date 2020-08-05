/*
* @Author: Chen
* @Date:   2019-12-02 16:52:50
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-16 20:24:34
*/
import axios from 'axios'
import * as types from './actionTypes.js'
import api from 'api'
import { message } from 'antd'


//处理新增商品action
const setMainImageErrAction = ()=>({
	type:types.SET_MAIN_IMAGE_ERR
})
const setImagesErrAction = ()=>({
	type:types.SET_IMAGES_ERR
})
export const getSaveProductAction = (err,values)=>{
	return (dispatch,getState)=>{
		const state = getState().get('product')
		const mainImage = state.get('mainImage')
		const images = state.get('images')
		const detail = state.get('detail')
		let hasErr = false
		if(err){
			hasErr = true
		}
		//自定义组件验证
		if(!mainImage){
			hasErr = true
			dispatch(setMainImageErrAction())
		}
		if(!images){
			hasErr = true
			dispatch(setImagesErrAction())
		}
		if(hasErr){
			return 
		}
		//判断到底是新增商品还是修改商品:根据有没有传入ID判断
		let request = api.addProducts
		if(values.id){
			request = api.updateProducts
		}
		request({
			...values,
			mainImage:mainImage,
			images:images,
			detail:detail
		})
		.then(result=>{
			// console.log(result)
			const data = result.data
			if(data.code == 0){
				message.success(data.message,()=>{
					window.location.href = '/product'
				})
			}else{
				message.error(data.message)
			}
		})
		.catch(err=>{
			console.log(err)
		})
	}
}

//处理自定义组件存值到store
export const getMainImageAction = (payload)=>({
	type:types.SET_MAIN_IMAGE,
	payload
})
export const getImagesAction = (payload)=>({
	type:types.SET_IMAGES,
	payload
})
export const getDetailAction = (payload)=>({
	type:types.SET_DETAIL,
	payload
})


const setLevelCategoriesAction = (payload)=>({
	type:types.SET_LEVEL_CATEGORIES,
	payload
})
//处理获取最新父级分类数据
export const getLevelCategoriesAction = ()=>{
	return (dispatch,getState)=>{
		api.getLevelCategories({
			level:3
		})
		.then(result=>{
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
//处理商品列表分页数据
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
export const getPageAction = (page,keyword)=>{
	return (dispatch,getState)=>{
		//发送请求前显示loading
		dispatch(getPageStartAction())
		//如果有关键词则进行关键词查询数据
		let options = {
			page:page
		}
		if(keyword){
			options.keyword = keyword
		}
		api.getProductsList(options)
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
//更新是否首页显示
export const getUpdateIsShowAction = (id,newIsShow)=>{
	return (dispatch,getState)=>{
		const page = getState().get('product').get('current')
		api.updateProductsIsShow({
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
//更新上架/下架
export const getUpdateStatusAction = (id,newStatus)=>{
	return (dispatch,getState)=>{
		const page = getState().get('product').get('current')
		api.updateProductsStatus({
			id:id,
			status:newStatus,
			page:page
		})
		.then(result=>{
			const data = result.data
			if(data.code == 0){
				message.success('更新上架/下架成功')
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
//更新是否热卖
export const getUpdateIsHotAction = (id,newIsHot)=>{
	return (dispatch,getState)=>{
		const page = getState().get('product').get('current')
		api.updateProductsIsHot({
			id:id,
			isHot:newIsHot,
			page:page
		})
		.then(result=>{
			const data = result.data
			if(data.code == 0){
				message.success('更新是否热卖成功')
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
		const page = getState().get('product').get('current')
		api.updateProductsOrder({
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
//处理编辑商品
const setProductDetailAction = (payload)=>({
	type:types.SET_PRODUCT_DETAIL,
	payload
})
export const getProductDetailAction = (id)=>{
	return (dispatch,getState)=>{
		api.getProductDetail({
			id:id,
		})
		.then(result=>{
			const data = result.data
			if(data.code == 0){
				dispatch(setProductDetailAction(data.data))
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
