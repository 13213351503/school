const mongoose = require('mongoose')


//1.定义文档模型
	const UserSchema = new mongoose.Schema({
	  	name:{
	  		type:String,
	  		required:[true,"必须输入用户名"],
	  		minlength:[3,"最小长度不小于3位"],
	  		maxlength:[8,"最长长度不超过8位"]
	  	},
	  	age:{
	  		type:Number,
	  		min:[20,"最小年龄不小于20岁"],
	  		max:[80,"最大年龄不超过80岁"]
	  	},
	  	major:{
	  		type:String,
	  		required:[true],
	  		enum:["Computer","Art","Music"]
	  	},
	  	isAdmin:{
	  		type:Boolean
	  	},
	  	phone:{
	  		type:Number,
	  		validate:{
	  			validator:(val)=>{
	  				return /1[35789]\d{9}/.test(val)
	  			},
	  			message:"手机号不符合要求"
	  		}
	  	},
	  	createAt:{
	  		type:Date,
	  		default:Date.now
	  	},
	  	friends:{
	  		type:Array
	  	}
	})


	//定义实例方法
	UserSchema.methods.getBlogs = function(cb){
		// console.log(123)
		// console.log(this)
		// console.log(this.model('blog'))
		this.model('blog').find({author:this._id},cb)
	}
	//定义静态方法
	UserSchema.statics.findByPhone = function(val,callback){
		// console.log(val)
		// console.log(this)
		this.findOne({phone:val},callback)
	}




//2.根据文档模型生成对应模型(集合)
//2.1第一个参数就是需要生成的集合名称,mongoose子自动将集合名称转化为复数
//2.2第二个参数就是前面定义的文档模型
const UserModel = mongoose.model('user', UserSchema)


module.exports = UserModel