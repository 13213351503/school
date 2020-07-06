const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json')
const url = require('url');
const { get } = require('./model/item.js');
const swig = require('swig');
const querystring = require('querystring');



const server = http.createServer((req,res)=>{
	//req是可读流
	//res是可写流
	const filePath = req.url;
	const parse = url.parse(filePath);
	// console.log(parse);
	const parseName = parse.pathname;

	//1.请求首页处理
	if(parseName == '/' || parseName == '/index.html'){
		get()
		.then(data=>{
			//引入模板处理数据
			const filename = path.normalize(__dirname+'/static/index.html');
			var template = swig.compileFile(filename);
			const html = template({
				data:data
			});
			res.setHeader('Content-type','text/html;charset="utf-8"');
			res.end(html);
		})
		.catch(err=>{
			res.setHeader('Content-type','text/html;charset="utf-8"');
			res.statusCode = 404;
			res.end('您输入的地址有误');
		})
	}else if(parseName == '/add'){	//2.添加数据处理
		let body = '';
		req.on('data',(items)=>{
			body += items;
		});
		req.on('end',()=>{
			const query = querystring.parse(body);
			console.log(query);
		});
		// res.end('ok')
	}else if(parseName == '/delete'){	//3.删除数据处理

	}else{	//4.静态页面处理
		const fileName = path.normalize(__dirname + '/static/' + filePath);
		// console.log(fileName);
		// console.log(filePath);
		fs.readFile(fileName,{flag:'r',encoding:'utf-8'},(err,data)=>{
			if(err){
				res.setHeader('Content-Type', 'text/html;charset=utf-8');
				res.statusCode = 404;
				res.end('您输入的地址有误');
			}else{
				const extname = path.extname(filePath);
				// console.log(extname);
				const mi = mime[extname];
				// console.log(mi);
				res.setHeader('Content-Type', mi+';charset=utf-8');
				res.statusCode = 200;
				res.end(data);
			}
		})
	}
	
	
	
	
	
	
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('running in http://127.0.0.1:3000');
})