const express = require('express')
const route = express.Router()  
const userModel = require('../models/user.js')
const CommentModel = require('../models/comment.js')
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



//显示评论列表页面
route.get('/comment',(req,res)=>{
	//获取所有评论分页信息
	CommentModel.getPaginationData(req)
	.then(result=>{
		res.render('admin/comment-list',{
			userInfo:req.userInfo,
			comments:result.docs,
			page:result.page,
			list:result.list,
			pages:result.pages
		})
	})
	.catch(err=>{
		console.log(err)
	})
})

//处理删除评论逻辑
route.get('/comment/delete/:id',(req,res)=>{
	//获取参数
	const id = req.params.id;
	//通过ID查找数据库并删除该条记录
	CommentModel.deleteOne({_id:id})
	.then(data=>{
		res.render('admin/ok',{
			userInfo:req.userInfo,
			message:'删除评论成功',
			url:'/admin/comment'
		})
	})
	.catch(err=>{
		console.log(err);
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'操作数据库失败,请稍后再试!',
			url:'/admin/comment'
		})
	})
})

//显示修改密码页面
route.get('/password',(req,res)=>{
	res.render('admin/password',{
		userInfo:req.userInfo
	})
})
//处理修改密码路由
route.post('/password',(req,res)=>{
	const { password } = req.body
	userModel.updateOne({_id:req.userInfo._id},{password:hmac(password)})
	.then(data=>{
		req.session.destroy()
		res.render('admin/ok',{
			userInfo:req.userInfo,
			message:'修改密码成功',
			url:'/'
		})
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'更新密码失败,请稍后再试!!!',
		})
	})
})

module.exports = route;