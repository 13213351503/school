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


route.post('/login', (req, res) => {
	//1.获取参数信息
	// console.log(req.body)
	const { username,password } = req.body;
	//2.数据同名验证
	userModel.findOne({username:username,password:hmac(password)},'-password')
	.then(data=>{
		if(data){	//登陆成功
			//用户登陆时生成cookies信息
			req.cookies.set('userInfo',JSON.stringify(data),{maxAge:1000*60*60*24});
			res.json({
				code:0,
				massage:'登陆成功',
				data:data
			})
		}else{	//登陆失败
			res.json({
				code:10,
				massage:'请输入正确的用户名或密码'
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

//用户退出
route.get('/logout', (req, res) => {
	req.cookies.set('userInfo',null);
	res.json({
		code:0,
		massage:'成功退出'
	})
})

module.exports = route;