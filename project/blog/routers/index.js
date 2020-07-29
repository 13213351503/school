const express = require('express')
const route = express.Router() 
const CategoryModel = require('../models/category.js') 
const ArticleModel = require('../models/article.js')
const CommentModel = require('../models/comment.js')

//获取首页共通数据
async function getCommonData(){
	//获取顶部分类数据
	let categoriesData = await CategoryModel.find({},'name').sort({_id:1});

	//获取点击排行
	let topArticles = await ArticleModel.find({},'click title').sort({_id:-1}).limit(8);
	return {
		categoriesData,
		topArticles
	}
}

//显示首页
route.get('/', (req, res) => {
	//获取cookie信息并返回给模板
	// console.log(req.cookies.get('userInfo'))
	/*
	let userInfo = {}
	if(req.cookies.get('userInfo')){
		userInfo = JSON.parse(req.cookies.get('userInfo'))
	}
	*/
	ArticleModel.getPagination(req)
	.then(result=>{
		getCommonData()
		.then(data=>{
			const { categoriesData,topArticles } = data
			res.render('main/index',{
				userInfo:req.userInfo,
				categoriesData,
				topArticles,
				//返回分页数据
				articles:result.docs,
				page:result.page,
				list:result.list,
				pages:result.pages,
			})
		})
		.catch(err=>{
			console.log(err);
		})
	})
	.catch(err=>{
		console.log(err);
	})
})

//处理首页分页ajax请求
route.get('/articles', (req, res) => {
	const id = req.query.id;
	// console.log(id);
	let query = {};
	if(id){
		query.category = id;
	}
	ArticleModel.getPagination(req,query)
	.then(data=>{
		res.json({
			code:0,
			message:'获取分页文章成功',
			data:data
		})
	})
	.catch(err=>{
		res.json({
			code:10,
			message:'获取分页文章失败',
		})
	})
})


//显示列表页
route.get('/list/:id', (req, res) => {
	const id = req.params.id;
	// console.log(id);
	let query = {};
	if(id){
		query.category = id;
	}
	ArticleModel.getPagination(req,query)
	.then(result=>{
		getCommonData()
		.then(data=>{
			const { categoriesData,topArticles } = data
			res.render('main/list',{
				userInfo:req.userInfo,
				categoriesData,
				topArticles,
				//返回分页数据
				articles:result.docs,
				page:result.page,
				list:result.list,
				pages:result.pages,
				currentCategoryId:id
			})
		})
		.catch(err=>{
			console.log(err);
		})
	})
	.catch(err=>{
		console.log(err);
	})
})

//获取详情页数据
async function getDetailDate(req){
	const id = req.params.id;

	//获取共通数据
	const getCommonDataPromise = getCommonData();
	//获取文章详情数据
	
	const getArticleDataPromise = ArticleModel.findOneAndUpdate({_id:id},{$inc:{click:1}},{new:true})
								  .populate({ path: 'user', select: 'username'})
								  .populate({ path: 'category', select: 'name'})
	//获取评论分页数据
	const getCommentDataPromise = CommentModel.getPaginationData(req,{article:id})

	//为了保证详情文章中的点击数和点击排行中的点击数据保持一致
	//必须先获取文章更新后的数据在获取点击排行数据
	const articleData = await getArticleDataPromise;
	const commonData = await getCommonDataPromise;
	const commentsData = await getCommentDataPromise

	const { categoriesData,topArticles } = commonData;

	return {
		categoriesData,
		topArticles,
		articleData,
		commentsData
	}
}



//显示详情页
route.get('/detail/:id', (req, res) => {
	getDetailDate(req)
	.then(result=>{
		const { categoriesData,topArticles,articleData,commentsData } = result;
		res.render('main/detail',{
			userInfo:req.userInfo,
			categoriesData,
			topArticles,
			articleData,
			currentCategoryId:articleData.category._id.toString(),
			//返回分页数据
			comments:commentsData.docs,
			page:commentsData.page,
			list:commentsData.list,
			pages:commentsData.pages,

		})
	})
	.catch(err=>{
		console.log(err);
	})
	
})



module.exports = route;