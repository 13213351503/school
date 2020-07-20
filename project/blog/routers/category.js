const express = require('express')
const route = express.Router()  
const CategoryModel = require('../models/category.js')
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
		model:CategoryModel,
		query:{},
		projection:'-__v',
		sort:{order:1},
	}
	pagination(options)
	.then(result=>{
		res.render('admin/category-list',{
			userInfo:req.userInfo,
			categories:result.docs,
			page:result.page,
			list:result.list,
			pages:result.pages
		})
	})
	.catch(err=>{
		console.log(err);
	})
	
})
//显示新增分类页面
route.get('/add',(req,res)=>{
	res.render('admin/category-add-edit',{
		userInfo:req.userInfo,
	})
})
//处理新增分类路由
route.post('/add',(req,res)=>{
	// 1.获取参数
	let { name,order } = req.body;
	if(!order){
		order = 0;
	}
	//2.查询集合进行同名验证
	CategoryModel.findOne({name:name})
	.then(category=>{
		if(category){	//如果数据库有该该分类不能插入
			res.render('admin/err',{
				userInfo:req.userInfo,
				message:'已有该分类名称，请更换名称',
				url:'/category/add'
			})
		}else{			//可以插入该分类
			CategoryModel.insertMany({
				name:name,
				order:order,
			})
			.then(result=>{
				res.render('admin/ok',{
					userInfo:req.userInfo,
					message:'添加分类成功',
					url:'/category'
				})
			})
			.catch(err=>{
				res.render('admin/err',{
					userInfo:req.userInfo,
					message:'数据库请求失败，请稍后再试'
				})
			})
		}
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'数据库请求失败，请稍后再试'
		})
	})
})


//显示编辑页面
route.get('/edit:id',(req,res)=>{
	//获取当前点击记录的ID
	const id = req.params.id;
	CategoryModel.findById(id)
	.then(category=>{
		res.render('admin/category-add-edit',{
			userInfo:req.userInfo,
			category
		})
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'数据库请求失败，请稍后再试'
		})
	})
	
})

//处理编辑分类逻辑
route.post('/edit',(req,res)=>{
	// 1.获取参数
	let { name,order,id } = req.body;
	if(!order){
		order = 0;
	}
	//2.查询集合获取该记录
	CategoryModel.findOne({_id:id})
	.then(category=>{
		if(category.name == name && category.order == order){	//数据没有更改
			res.render('admin/err',{
				userInfo:req.userInfo,
				message:'数据没有更新，请更新后在提交'
			})
		}else{	//数据有更新
			CategoryModel.findOne({name:name,_id:{$ne:id}})
			.then(result=>{		//数据库有同名分类，不能更新数据
				if(result){
					res.render('admin/err',{
						userInfo:req.userInfo,
						message:'数据库有该分类，请更换名称'
					})
				}else{
					CategoryModel.updateOne({_id:id},{name,order})
					.then(data=>{
						res.render('admin/ok',{
							userInfo:req.userInfo,
							message:'数据更新成功',
							url:'/category'
						})
					})
					.catch(err=>{
						res.render('admin/err',{
							userInfo:req.userInfo,
							message:'数据库请求失败，请稍后再试'
						})
					})
				}
			})
			.catch(err=>{
				res.render('admin/err',{
					userInfo:req.userInfo,
					message:'数据库请求失败，请稍后再试'
				})
			})
		}
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'数据库请求失败，请稍后再试'
		})
	})
})


//处理删除界面
route.get('/delete:id',(req,res)=>{
	//获取当前点击记录的ID
	const id = req.params.id;
	CategoryModel.deleteOne({_id:id})
	.then(category=>{
		res.render('admin/ok',{
			userInfo:req.userInfo,
			message:'删除分类成功',
			url:'/category'
		})
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'数据库请求失败，请稍后再试',
			url:'/category'
		})
	})
	
})
module.exports = route;