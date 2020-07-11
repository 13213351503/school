//引入数据库
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb://127.0.0.1:27017"
const dbName = 'it'


const client = new MongoClient(uri, { useUnifiedTopology: true })
//链接数据库
client.connect(err => {
	if(err){
	 	console.log('connect db error')
	 	throw err
	}
	console.log('connect db success')

	//1.切换数据库,没有的话则新建
	const db = client.db(dbName)
	//2.切换集合,没有的话则新建集合
	const collection = db.collection('user')
	// console.log(collection)
	//3.根据collection(集合)进行数据库操作:CRUD
	// //3.1新增
	
	// collection.insertMany([{name:"Tom",age:99},{name:"Leo",age:80}],(err,docs)=>{
	// 	if(err){
	// 		console.log("insert err::",err)
	// 	}else{
	// 		console.log("insert success::",docs)
	// 	}
	// 	//不管成功失败关闭链接
	// 	client.close()
	// })
	

	// //3.2查找
	
	// collection.find({age:{$gt:90}}).toArray((err,docs)=>{
	// 	if(err){
	// 		console.log("insert err::",err)
	// 	}else{
	// 		console.log("insert success::",docs)
	// 	}
	// 	//不管成功失败关闭链接
	// 	client.close()
	// })
	

	// //3.3更新
	
	// collection.updateOne({name:"Tom"},{$set:{age:100}},(err,docs)=>{
	// 	if(err){
	// 		console.log("insert err::",err)
	// 	}else{
	// 		console.log("insert success::",docs)
	// 	}
	// 	//不管成功失败关闭链接
	// 	client.close()
	// })
	

	//3.4删除
	collection.deleteOne({name:"Tom"},(err,docs)=>{
		if(err){
			console.log("insert err::",err)
		}else{
			console.log("insert success::",docs)
		}
		//不管成功失败关闭链接
		client.close()
	})

})