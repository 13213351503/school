import axios from 'axios'
import * as types from './actionTypes.js'
import { message } from 'antd'
import apiObj from 'api'


//处理新增分类
export const getAddCategoriesAction = (values)=>{
	return (dispatch,getState)=>{
		apiObj.addCategories(values)
		.then(result=>{
			// console.log(result)
			const data = result.data;
			if(data.code == 0){//登录成功
				message.success('添加分类成功!!')
				dispatch(setLevelCategories(data.data))
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
const setLevelCategories = (payload)=>({
	type:types.SET_LEVEL_CATEGORIES,
	payload

});

//处理获取最新父级分类
export const getLevelCategoriesAction = ()=>{
	return (dispatch,getState)=>{
		apiObj.getLevelCategories({
			level:2
		})
		.then(result=>{
			const data = result.data;
			console.log(result)

			if(data.code == 0){//登录成功
				dispatch(setLevelCategories(data.data))
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


//处理分类列表分页数据
export const setPageAction = (val)=>({
	type:types.SET_PAGE,
	payload:val
})

const getLoadInitAction = (data) =>({
	type:types.LOAD_DATA,
	payload:data
})
export const getCategoriesStartAction = ()=>({
	type:types.REQUEST_START_ACTION,
})
export const getCategoriesDoneAction = ()=>({
	type:types.REQUEST_DONE_ACTION,
})

export const getPageAction = (page)=>{
	return (dispatch,getState)=>{
		//发送请求之前显示登录loading状态
		dispatch(getCategoriesStartAction())
		apiObj.getCategoriesList({
			page:page
		})
		.then(result=>{
			// console.log(result)
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
			dispatch(getCategoriesDoneAction())
		})
		
	}
}

//处理更新分类名称
export const getUpdateCategories = (id,newName)=>{
	return (dispatch,getState)=>{
		//发送请求之前显示登录loading状态
		const page = getState().get('category').get('current');
		dispatch(getCategoriesStartAction())
		apiObj.updateCategoriesName({
			id:id,
			name:newName,
			page:page
		})
		.then(result=>{
			// console.log(result)
			const data = result.data;
			if(data.code == 0){//登录成功
				message.success('更新分类名称成功')
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
			dispatch(getCategoriesDoneAction())
		})
		
	}
}