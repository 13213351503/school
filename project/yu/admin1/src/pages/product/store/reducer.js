/*
* @Author: Chen
* @Date:   2019-12-05 15:11:29
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-16 20:29:20
*/
import { fromJS } from 'immutable'
const defaultState = fromJS({
	list:[],
	current:0,
	pageSize:0,
	total:0,
	isFecthing:false,
	categories:[],

	mainImage:'',
	images:'',
	detail:'',

	mainImageValidateStatus:'',
	mainImageHelp:'',
	imagesValidateStatus:'',
	imagesHelp:'',

	category:'',
	categoryName:'',
	name:'',
	description:'',
	price:'',
	stock:'', 

	keyword:''
})
import * as types from './actionTypes.js'

export default (state=defaultState,action)=>{
	//处理商品列表分页数据
	if(action.type == types.SET_PAGE){
		return state.merge({
			list:fromJS(action.payload.list),
			current:action.payload.current,
			pageSize:action.payload.pageSize,	
			total:action.payload.total,
			keyword:action.payload.keyword
		})
	}
	if(action.type == types.PAGE_REQUEST_START){
		return state.set('isFecthing',true)
	}
	if(action.type == types.PAGE_REQUEST_DONE){
		return state.set('isFecthing',false)
	}
	//处理获取最新父级分类
	if(action.type == types.SET_LEVEL_CATEGORIES){
		return state.set('categories',fromJS(action.payload))
	}
	//处理自定义组件存值
	//只要上传图片则说明已经上传了图片,所以自定义验证消息需要初始化
	if(action.type == types.SET_MAIN_IMAGE){
		return state.merge({
			mainImage:action.payload,
			mainImageValidateStatus:'',
			mainImageHelp:''
		})
	}
	if(action.type == types.SET_IMAGES){
		return state.merge({
			images:action.payload,
			imagesValidateStatus:'',
			imagesHelp:''
		})
	}
	if(action.type == types.SET_DETAIL){
		return state.set('detail',action.payload)
	}
	//处理自定义组件验证
	if(action.type == types.SET_MAIN_IMAGE_ERR){
		return state.merge({
			mainImageValidateStatus:'error',
			mainImageHelp:'请上传封面图片'
		})
	}
	if(action.type == types.SET_IMAGES_ERR){
		return state.merge({
			imagesValidateStatus:'error',
			imagesHelp:'请上传商品图片'
		})
	}
	//处理编辑商品详情
	if(action.type == types.SET_PRODUCT_DETAIL){
		return state.merge({
			category:action.payload.category._id,
			categoryName:action.payload.category.name,
			name:action.payload.name,
			description:action.payload.description,
			price:action.payload.price,
			stock:action.payload.stock,
			mainImage:action.payload.mainImage,
			images:action.payload.images,
			detail:action.payload.detail,
		})
	}

	return state
}