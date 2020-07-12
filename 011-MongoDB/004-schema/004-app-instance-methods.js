const mongoose = require('mongoose')
const moment = require('moment')
const UserModel = require('./module/user.js')
const BlogModel = require('./module/blog.js')
//链接数据库
// mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true})
mongoose.connect('mongodb://localhost/kuazhu', { useUnifiedTopology: true,useNewUrlParser: true })

let getRandom = (min,max)=>{
	return Math.round(min+Math.random()*(max-min))
}
const names = ["Tom","Leo","Peter","Jane","Alice","Json","Bobi"]
const majors = ["Sport","Music","Computer","Art","Elec"]

let getNames = ()=>names[getRandom(0,names.length-1)]
let getMajors = ()=>majors[getRandom(0,majors.length-1)]





const db = mongoose.connection
db.on('error',(err)=>{
	console.log('connect db err ...')
	throw err
})
db.once('open', function() {
  	console.log('connect success !!!')
  	
	//3.根据模型进行数据库操作:CRUD
	//3.1新增
	//模拟数据
	
	// UserModel.insertMany({
	// 	name:"Tom",
	// 	age:28,
	// 	major:"Art",
	// 	phone:13456789645
	// })
	// .then(data=>{
	// 	console.log(data)
	// })
	// .catch(err=>{
	// 	console.log(err.message)
	// })
	
	// BlogModel.insertMany({
	// 	title:"test 11111",
	// 	content:"best blog of test2",
	// 	author:"5dc7c6dbe1f2cf2df08c7845"
	// })
	// .then(data=>{
	// 	console.log(data)
	// })
	// .catch(err=>{
	// 	console.log(err.message)
	// })
	

	
	// UserModel.findOne({name:"Tom"})
	// .then(user=>{
	// 	// console.log(user)
	// 	BlogModel.find({author:user._id},(err,docs)=>{
	// 		if(err){
	// 			console.log(err.message)
	// 		}else{
	// 			console.log(docs)
	// 		}
	// 	})
	// })
	// .catch(err=>{
	// 	console.log(err.message)
	// })
	

	UserModel.findOne({name:"Tom"})
	.then(user=>{
		// console.log(user)
		user.getBlogs((err,docs)=>{
			if(err){
				console.log(err.message)
			}else{
				console.log(docs)
			}
		})
	})
	.catch(err=>{
		console.log(err.message)
	})
})