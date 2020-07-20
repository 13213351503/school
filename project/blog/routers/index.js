const express = require('express')
const route = express.Router()  

route.get('/', (req, res) => {
	//获取cooike信息
	res.render('main/index',{
		userInfo:req.userInfo
	})
})

route.get('/list', (req, res) => {
	//获取cooike信息
	res.render('main/list',{
		userInfo:req.userInfo
	})
})

route.get('/detail', (req, res) => {
	//获取cooike信息
	res.render('main/detail',{
		userInfo:req.userInfo
	})
})



module.exports = route;