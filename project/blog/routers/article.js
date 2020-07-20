const express = require('express')
const route = express.Router()  
const ArticleModel = require('../models/article.js')
const hmac = require('../util/hmac.js')
const pagination = require('../util/pagination.js')

route.use('/',(req,res,next)=>{
	if(req.userInfo.isAdmin){
		next();
	}else{
		res.send('<h1>请用管理员身份登陆</h1>')
	}
})

//显示分类管理页面
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
		console.log(result.docs)
		res.render('admin/category-list',{
			userInfo:req.userInfo,
			categories:result.docs,
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
module.exports = route;