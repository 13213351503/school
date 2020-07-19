const express = require('express')
const route = express.Router()  
const userModel = require('../models/user.js')
const hmac = require('../util/hmac.js')
const pagination = require('../util/pagination.js')

route.use('/',(req,res,next)=>{
	if(req.userInfo.isAdmin){
		next();
	}else{
		res.send('<h1>请用管理员身份登陆</h1>')
	}
})

//显示后台管理员首页
route.get('/',(req,res)=>{
	res.render('admin/index',{
		userInfo:req.userInfo,
	})
})

//显示用户列表
route.get('/users',(req,res)=>{
// 	/*
// 	分页：具体显示哪一页page由前台传入
// 	约定：每一页显示几条数据：limit = 3
// 	第一页显示：	1-3 skip （1-1）*3
// 	第二页显示：	4-6 skip  (2-1) *3
// 	第三页显示：	7-9 skip  (3-1) *3
// 	......
// 	第n页显示		skip  （page-1） *limit

// 	 */

// 	 let page = req.query.page*1;
// 	 if(isNaN(page)){
// 	 	page = 1;
// 	 }
// 	 let limit = 3;
// 	 //上一页边界控制
// 	 if(page <= 0){
// 	 	page = 1;
// 	 }
	 

// 	 userModel.countDocuments((err,count)=>{
// 	 	//count是页面总条数
// 	 	// console.log(count);
// 	 	let pages = Math.ceil(count/limit);
// 	 	// console.log(pages)
// 	 	let list = [];
// 	 	for(let i = 1;i<=pages;i++){
// 	 		list.push(i);
// 	 	}
// 	 	if(page>=pages){
// 	 		page = pages;
// 	 	}

// 	 	//跳过数据的条数
// 	 	let skip = (page-1)*limit;
// 	 	//查询数据库用户信息
// 		userModel.find({},'-password -__v')
// 		.sort({_id:1})
// 		.skip(skip)
// 		.limit(limit)
// 		.then(data=>{
// 			// console.log(data);
// 			res.render('admin/user-list',{
// 				userInfo:req.userInfo,
// 				data:data,
// 				page:page,
// 				list:list,
// 				pages:pages
// 			})
// 		})
// 		.catch(err=>{
// 			console.log(err);
// 		})
// 	 })



	const options = {
		page:req.query.page*1,
		model:userModel,
		query:{},
		projection:'-password -__v',
		sort:{_id:1},
	}
	pagination(options)
	.then(result=>{
		res.render('admin/user-list',{
			userInfo:req.userInfo,
			data:result.docs,
			page:result.page,
			list:result.list,
			pages:result.pages
		})
	})
	.catch(err=>{
		console.log(err);
	})
})


module.exports = route;