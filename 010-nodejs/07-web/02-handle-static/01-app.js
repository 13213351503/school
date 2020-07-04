const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json')

const server = http.createServer((req,res)=>{
	//req是可读流
	//res是可写流
	const filePath = req.url;
	const fileName = path.normalize(__dirname + '/static/' + filePath);
	console.log(fileName);
	// console.log(filePath);
	fs.readFile(fileName,{flag:'r',encoding:'utf-8'},(err,data)=>{
		if(err){
			res.setHeader('Content-Type', 'text/html;charset=utf-8');
			res.statusCode = 404;
			res.end('您输入的地址有误')
		}else{
			const extname = path.extname(filePath);
			// console.log(extname);
			const mi = mime[extname];
			console.log(mi);

			res.setHeader('Content-Type', mi+';charset=utf-8');
			res.statusCode = 200;
			res.end(data)
		}
	})
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('running in http://127.0.0.1:3000');
})