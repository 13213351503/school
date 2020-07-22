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
	//获取cooike信息
	ArticleModel.getPagination(req)
	.then(data=>{
		getCommonData()
		.then(result=>{
			const { categoriesData,topArticles } = result;
			res.render('main/index',{
				userInfo:req.userInfo,
				categoriesData,
				topArticles,
				articles:data.docs,
				page:data.page,
				list:data.list,
				pages:data.pages,
				url:'/'
			})
		})
		.catch(err=>{
			console.log(err)
		})
	})

	
})

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