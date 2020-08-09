import { fromJS } from 'immutable'
const defaultState = fromJS({
	list:[],
	total:50,
	pageSize:10,
	current:1,
	isFetching:false,
	categories:[],

	mainImage:'',
	images:'',
	detail:'',

	mainImageVaildateStatus:'',
	mainImageHelp:'',
	imagesVaildateStatus:'',
	imagesHelp:'',

	category:'',
	name:'',
	description:'',
	price:'',
	stock:''

})
import * as types from './actionTypes.js'

export default (state=defaultState,action)=>{
	//处理商品列表
	if(action.type == types.SET_PAGE){
		return state.merge({
			list:fromJS(action.payload.list),
			total:action.payload.total,
			pageSize:action.payload.pageSize,
			current:action.payload.current
		})
	}
	if(action.type == types.REQUEST_START_ACTION){
		
		return state.set('isFetching',true)
	}
	else if(action.type == types.REQUEST_DONE_ACTION){
		
		return state.set('isFetching',false)
	}

	//处理设置分类数据
	else if(action.type == types.SET_LEVEL_CATEGORIES){
		
		return state.set('categories', fromJS(action.payload))
	}
	//处理自定义组件存值
	else if(action.type == types.SET_MAIN_IMAGE){
		
		return state.merge({
			mainImage:action.payload,
			mainImageVaildateStatus:'',
			mainImageHelp:'',
		})
	}
	else if(action.type == types.SET_IMAGES){
		
		return state.merge({
			images:action.payload,
			imagesVaildateStatus:'',
			imagesHelp:'',
		})
	}
	else if(action.type == types.SET_DETAIL){
		
		return state.set('detail', action.payload)
	}

	//处理自定义组件验证
	else if(action.type == types.SET_MAIN_IMAGE_ERR){
		
		return state.merge({
			mainImageVaildateStatus:'error',
			mainImageHelp:'请添加封面图片!!',
		})
	}
	else if(action.type == types.SET_IMAGES_ERR){
		
		return state.merge({
			imagesVaildateStatus:'error',
			imagesHelp:'请添加商品图片!!',
		})
	}


	//处理获取商品详情
	else if(action.type == types.SET_PRODUCT_DETAIL){
		
		return state.merge({
			category:action.payload.category._id,
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