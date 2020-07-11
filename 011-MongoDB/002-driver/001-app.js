//引入数据库
const MongoClient = require('mongodb').MongoClient;
// console.log(MongoClient);
const uri = "mongodb://127.0.0.1:27017";

//连接数据库
const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true});

client.connect(err => {
	if(err){
		console.log(err);
		throw err;
	};
	//无论成功失败都要关闭数据库
	console.log('connect success');
  	client.close();
});