const express = require('express')
const router = express.Router()
const CommentModel = require('../models/comment.js')
const pagination = require('../util/pagination.js')


//权限验证
router.use((req,res,next)=>{
	if(req.userInfo._id){
		next()
	}else{
		res.send('<h1>请登录后再评论!!</h1>')
	}
})

//处理添加评论路由
router.post('/add', (req, res) => {
	const { content,article } = req.body
	CommentModel.insertMany({
		content,
		article,
		user:req.userInfo._id.toString()
	})
	.then(comment=>{
		CommentModel.getPaginationData(req,{article:article})
		.then(data=>{
			res.json({
				code:0,
				message:'评论成功',
				data:data
			})
		})
		.catch(err=>{
			res.json({
				code:10,
				message:'评论失败'
			})
		})
	})
	.catch(err=>{
		res.json({
			code:10,
			message:'数据库操作错误,请稍后再试'
		})
	})
})

//处理评论ajax
router.get('/list',(req,res)=>{
	const id = req.query.id
	let query = {}
	if(id){
		query.article = id
	}
	CommentModel.getPaginationData(req,query)
	.then(result=>{
		res.json({
			code:0,
			message:'获取评论信息成功',
			data:result
		})
	})
	.catch(err=>{
		console.log(err)
		res.json({
			code:10,
			message:'获取评论信息失败'
		})
	})
})



module.exports = router