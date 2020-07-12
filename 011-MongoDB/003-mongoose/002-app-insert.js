const mongoose = require('mongoose')
//链接数据库
// mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true})
mongoose.connect('mongodb://localhost/kuazhu', { useUnifiedTopology: true,useNewUrlParser: true });


let getRandom = (min,max)=>{
	return Math.round(min+Math.random()*(max-min))
}
let names = ["Tom","Leo","Peter","Jane","Alice","Json","Bobi"]
let majors = ["Sport","Music","Computer","Art","Elec"]

let getNames = ()=>names[getRandom(0,names.length-1)];
let getMajors = ()=>majors[getRandom(0,majors.length-1)]	


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
	// 3.1新增
	// const user = new UserModel({name:"Tom",age:18,major:"Computer"})
	// user.save()
	// .then(data=>{
	// 	console.log(data)
	// })
	// .catch(err=>{
	// 	console.log(err.message)
	// })


	// UserModel.insertMany([{name:"Leo",age:20,major:"Art"}],(err,docs)=>{
	// 	if(err){
	// 		console.log(err.message)
	// 	}else{
	// 		console.log(docs)
	// 	}
	// })

	// UserModel.insertMany([{name:"Peter",age:30,major:"Art"}])
	// .then(data=>{
	// 	console.log(data)
	// })
	// .catch(err=>{
	// 	console.log(err.message)
	// })

	// UserModel.create([{name:"Anmy",age:80,major:"Music"},{name:"Jane",age:33,major:"Sport"}])
	// .then(data=>{
	// 	console.log(data)
	// })
	// .catch(err=>{
	// 	console.log(err.message)
	// })


	let arr = []
	for(let i=0;i<40;i++){
		let obj = {};
		obj.name = getNames();
		obj.age = getRandom(20,100);
		obj.major = getMajors();

		arr.push(obj);
	}
	// console.log(arr)
	UserModel.insertMany(arr)
	.then(data=>{
		console.log(data)
	})
	.catch(err=>{
		console.log(err)
	})
})