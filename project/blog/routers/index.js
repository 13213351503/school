const express = require('express')
const route = express.Router() 
const CategoryModel = require('../models/category.js') 
const ArticleModel = require('../models/article.js')

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
				url:'/'
			})
		})
	})
})

//处理首页分页ajax请求
route.get('/articles', (req, res) => {
	ArticleModel.getPagination(req)
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
route.get('/list', (req, res) => {
	//获取cooike信息
	res.render('main/list',{
		userInfo:req.userInfo
	})
})

route.get('/detail', (req, res) => {
	//获取cooike信息
	res.render('main/detail',{
		userInfo:req.userInfo
	})
})



module.exports = route;