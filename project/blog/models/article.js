const mongoose = require('mongoose')
const moment = require('moment')
const pagination = require('../util/pagination.js')


//1.定义文档模型
	const ArticleSchema = new mongoose.Schema({
	  	title:{
	  		type:String,
	  	},
	  	intro:{
	  		type:String,
	  	},
	  	user:{
	  		type:mongoose.Schema.Types.ObjectId,
	  		ref:'user'
	  	},
	  	category:{
	  		type:mongoose.Schema.Types.ObjectId,
	  		ref:'category'
	  	},
	  	createrAt:{
	  		type:Date,
	  		default:Date.now
	  	},
	  	click:{
	  		type:Number,
	  		default:0
	  	},
	  	content:{
	  		type:String
	  	}
	});

	//定义时间虚拟属性
	ArticleSchema.virtual('createdTime').get(function(){
		return moment(this.createrAt).format('YYY - MM -DD HH:mm:ss');
	})
	//定义获取文章分页数据静态方法
	ArticleSchema.statics.getPagination = function(req,query={}){
		const options = {
			page:req.query.page*1,
			model:this,
			query:query,
			projection:'-__v',
			sort:{_id:1},
			populates:[{path:'user',select:'username'},{path:'category',select:'name'}]
		}
		return pagination(options)
	}

//2.根据文档模型生成对应模型(集合)
//2.1第一个参数就是需要生成的集合名称,mongoose子自动将集合名称转化为复数
//2.2第二个参数就是前面定义的文档模型
const ArticleModel = mongoose.model('article', ArticleSchema)


module.exports = ArticleModel