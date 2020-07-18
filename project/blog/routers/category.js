const express = require('express')
const route = express.Router()  
const userModel = require('../models/user.js')
const hmac = require('../util/hmac.js')

route.use('/',(req,res,next)=>{
	if(req.userInfo.isAdmin){
		next();
	}else{
		res.send('<h1>请用管理员身份登陆</h1>')
	}
})

//显示分类管理页面
route.get('/',(req,res)=>{
	res.render('admin/category-list',{
		userInfo:req.userInfo,
	})
})
//显示新增分类页面
route.get('/add',(req,res)=>{
	res.render('admin/category-add',{
		userInfo:req.userInfo,
	})
})

module.exports = route;