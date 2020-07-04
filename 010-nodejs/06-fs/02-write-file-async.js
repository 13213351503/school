const fs = require('fs');
const util = require('util');

//逐步操作
// fs.opendir(path[, options], callback)
// fs.open('./001.txt','a',(err,fd)=>{
// 	if(err){
// 		console.log('open err....')
// 	}else{
// 		fs.write(fd,'goodmorning',(err)=>{
// 			if(err){
// 				console.log('write err....')
// 			}else{
// 				fs.close(fd,(err)=>{
// 					if(err){
// 						console.log('close err....')
// 					}else{
// 						console.log('write success');
// 					}
// 				})
// 			}
// 		})
// 	}
// })


//合并操作
// fs.writeFile(file, data[, options], callback)
// fs.writeFile('./001.txt','goodafternoon',(err)=>{
// 	if(err){
// 		console.log('write err....');
// 	}else{
// 		console.log('write success');
// 	}
// })


//promise操作异步写文件
const f1 = util.promisify(fs.writeFile);
f1('./001.txt','aaaaa',{flag:'a'})
.then(()=>{
	console.log('write success')
})
.catch(()=>{
	console.log('write err...')
})