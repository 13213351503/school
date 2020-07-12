const mongoose = require('mongoose')
//链接数据库
// mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true})
mongoose.connect('mongodb://localhost/kuazhu', { useUnifiedTopology: true,useNewUrlParser: true });


const db = mongoose.connection
db.on('error',(err)=>{
	console.log('connect db err ...')
	throw err
})
db.once('open', function(){
  	console.log('connect success !!!')
  	//1.定义文档模型
  	const UserSchema = new mongoose.Schema({
	  	name: String,
	  	age:Number,
	  	major:String
	})
	//2.根据文档模型生成集合
	//2.1第一个参数代表着生成集合的名称（mongoose会自动将集合名称变成负数）
	//2.2第二个参数就是传入定义文档的模型Userchema
	const UserModel = mongoose.model('user', UserSchema)
	//3.根据生成的集合进行数据库操作：CRUD
	//3.1新增
	UserModel.deleteOne({age:{$lt:30}},(err,docs)=>{
		if(err){
			console.log(err.message)
		}else{
			console.log(docs)
		}
	})

	
	// UserModel.deleteMany({age:{$lt:30}},(err,docs)=>{
	// 	if(err){
	// 		console.log(err.message)
	// 	}else{
	// 		console.log(docs)
	// 	}
	// })


	UserModel.find({age:{$lt:30}},(err,docs)=>{
		if(err){
			console.log(err.message)
		}else{
			console.log(docs)
		}
	})
})