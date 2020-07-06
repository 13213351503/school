const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json')
const url = require('url');
const { get,add,del } = require('./model/item.js');
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
			// console.log(query);
			add(query.task)
			.then(data=>{
				res.end(JSON.stringify({
					code:0,
					message:'添加数据成功',
					data:data
				}))
			})
			.catch(err=>{
				res.end(JSON.stringify({
					code:1,
					message:'添加数据失败',
				}))
			})
		});
		// res.end('ok')
	}else if(parseName == '/del'){	//3.删除数据处理
		//1.获取参数信息
		const id = parse.query.id;
		//2.根据参数信息中的ID删除文件中对应的数据
		del(id)
		.then(data=>{
			res.end(JSON.stringify({
				code:0,
				message:'删除数据成功',
			}));
		})
		.catch(err=>{
			res.end(JSON.stringify({
				code:1,
				message:'删除数据失败',
			}));
		})
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