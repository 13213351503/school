const express = require('express')
const route = express.Router()  
const userModel = require('../models/user.js')
const hmac = require('../util/hmac.js')

route.post('/register', (req, res) => {
	//1.获取参数信息
	// console.log(req.body)
	const { username,password } = req.body;
	//2.数据同名验证
	userModel.findOne({username:username})
	.then(data=>{
		if(data){	//如果有同名用户
			res.json({
				code:10,
				massage:'该用户已被注册，请重新注册'
			})
		}else{
			userModel.insertMany({
				username:username,
				password:hmac(password)
			})
			.then(result=>{
				res.json({
					code:0,
					massage:'注册成功'
				})
			})
			.catch(err=>{
				res.json({
					code:10,
					massage:'数据库操作失败，请稍后再试'
				})
			})
		}
	})
	.catch(err=>{
		console.log(err)
		res.json({
			code:10,
			massage:'数据库操作失败，请稍后再试'
		})
	})

})



module.exports = route;