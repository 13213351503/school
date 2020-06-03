var http = require('http');

var fs = require('fs');		//转门用来读文件的核心模块

var server = http.createServer(function(req,res){
	// console.log(req.url);	//请求参数的地址
	if(req.url =='/favicon.ico' ){		//favicon.ico是图标地址
		res.end('ok');
	}
	var failPath = './'+ req.url; 		//获取当前要访问的文件，需要添加路径和地址
	// console.log(failPath);
	fs.readFile(failPath,function(err,data){	//需要传入地址和函数的返回值
		if(err){
			res.statusCode = 404;		//如果访问不存在的文件，报错为404
			res.end('Not Found!!!');
		}else{
			res.end(data);
			// console.log(data);
		};
	});


	// res.end('nihaoma');
});

server.listen(3000,'127.0.0.1',function(){
	console.log('server running at http://127.0.0.1:3000')
});