const express = require('express')
const multer = require('multer');
//dest:将上传的图片放在指定的文件夹中
const upload = multer({dest:'public/uploads/'});
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
	// const options = {
	// 	page:req.query.page*1,
	// 	model:ArticleModel,
	// 	query:{},
	// 	projection:'-__v',
	// 	sort:{_id:1},
	// 	populates:[{path:'user',select:'username'},{path:'category',select:'name'}]
	// }
	// pagination(options)
	ArticleModel.getPagination(req)
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
		res.render('admin/article-add-edit',{
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

//处理长传图片资源
//upload.single('upload')
//upload表示的是前台传递图片资源的字段名称
route.post('/uploadImg',upload.single('upload'),(req,res)=>{
	// console.log(req.file)
	const filePath = '/uploads/'+req.file.filename
	res.json({
		uploaded:true,
		url:filePath
	})
})


//显示编辑文章页面
route.get('/edit:id',(req,res)=>{
	//获取当前点击记录的ID
	const id = req.params.id;
	//获取所有分类
	CategoryModel.find({})
	.then(categories=>{
		//通过ID获取对应文章
		ArticleModel.findById(id)
		.then(article=>{
			res.render('admin/article-add-edit',{
				userInfo:req.userInfo,
				categories,
				article
			})
		})
		.catch(err=>{
			res.render('admin/err',{
				userInfo:req.userInfo,
				message:'数据库请求失败，请稍后再试'
			})
		})
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'数据库请求失败，请稍后再试'
		})
	})
	
})



// 处理编辑文章逻辑
route.post('/edit',(req,res)=>{
	// 1.获取参数
	let { category,title,intro,content,id } = req.body;
	//2.更新文章
	console.log(category,title,intro,content,id)
	ArticleModel.updateOne({_id:id},{category,title,intro,content})
	.then(data=>{
		res.render('admin/ok',{
			userInfo:req.userInfo,
			message:'更新文章成功',
			url:'/article'
		})
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'数据库请求失败，请稍后再试'
		})
	})
})




//处理文章删除逻辑
route.get('/delete:id',(req,res)=>{
	//获取当前点击记录的ID
	const id = req.params.id;
	ArticleModel.deleteOne({_id:id})
	.then(category=>{
		res.render('admin/ok',{
			userInfo:req.userInfo,
			message:'删除分类成功',
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