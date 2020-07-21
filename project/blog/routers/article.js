const express = require('express')
const route = express.Router()  
const ArticleModel = require('../models/article.js')
const CategoryModel = require('../models/category.js')
const hmac = require('../util/hmac.js')
const pagination = require('../util/pagination.js')

//权限验证
route.use('/',(req,res,next)=>{
	if(req.userInfo.isAdmin){
		next();
	}else{
		res.send('<h1>请用管理员身份登陆</h1>')
	}
})

//显示文章列表页面
route.get('/',(req,res)=>{
	const options = {
		page:req.query.page*1,
		model:ArticleModel,
		query:{},
		projection:'-__v',
		sort:{_id:1},
	}
	pagination(options)
	.then(result=>{
		res.render('admin/article-list',{
			userInfo:req.userInfo,
			articles:result.docs,
			page:result.page,
			list:result.list,
			pages:result.pages,
			url:'/article'
		})
	})
	.catch(err=>{
		console.log(err);
	})
	
})


//显示新增分类页面
route.get('/add',(req,res)=>{
	//首先获取所有分类传递给新增文章页面
	CategoryModel.find()
	.then(categories=>{
		res.render('admin/article-add',{
			userInfo:req.userInfo,
			categories
		})
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'数据库请求失败，请稍后再试'
		})
	})
})


//处理新增文章路由
route.post('/add',(req,res)=>{
	// 1.获取参数
	let { category,title,intro,content } = req.body;
	//2.将文章插入到数据库
	console.log(category,title,intro,content)
	ArticleModel.insertMany({
		category,
		title,
		intro,
		content,
		user:req.userInfo._id
	})
	.then(data=>{
		res.render('admin/ok',{
			userInfo:req.userInfo,
			message:'新增文章成功',
			url:'/article'
		})
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'数据库请求失败，请稍后再试',
			url:'/article'
		})
	})
})
module.exports = route;