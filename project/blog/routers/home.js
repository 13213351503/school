const express = require('express')
const router = express.Router()
const UserModel = require('../models/user.js')
const CommentModel = require('../models/comment.js')
const pagination = require('../util/pagination.js')
const hmac = require('../util/hmac.js')


//权限验证
router.use((req,res,next)=>{
	if(req.userInfo._id){
		next()
	}else{
		res.send('<h1>请登录账号!!</h1>')
	}
})

//显示后台用户首页
router.get('/', (req, res) => {
	res.render('home/index',{
		userInfo:req.userInfo
	})
})

//显示评论页路由处理
router.get('/comment',(req,res)=>{
	CommentModel.getPaginationData(req,{user:req.userInfo._id.toString()})
	.then(result=>{
		res.render('home/comment-list',{
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
//处理后台删除评论路由
router.get('/comment/delete/:id',(req,res)=>{
	const id = req.params.id
	//通过ID在数据库中查找该条数据并删除数据
	CommentModel.deleteOne({_id:id})
	.then(comment=>{
		res.render('home/ok',{
			userInfo:req.userInfo,
			message:'删除评论成功',
			url:'/home/comment'
		})
	})
	.catch(err=>{
		res.render('home/err',{
			userInfo:req.userInfo,
			message:'数据库操作失败,请稍后再试!!!',
			url:'/home/comment'
		})
	})
})

//显示修改密码页面
router.get('/password',(req,res)=>{
	res.render('home/password',{
		userInfo:req.userInfo
	})
})
//处理修改密码路由
router.post('/password',(req,res)=>{
	const { password } = req.body
	UserModel.updateOne({_id:req.userInfo._id},{password:hmac(password)})
	.then(data=>{
		req.session.destroy()
		res.render('home/ok',{
			userInfo:req.userInfo,
			message:'修改密码成功',
			url:'/'
		})
	})
	.catch(err=>{
		res.render('home/err',{
			userInfo:req.userInfo,
			message:'更新密码失败,请稍后再试!!!',
		})
	})
})


module.exports = router