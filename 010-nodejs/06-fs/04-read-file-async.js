
const fs = require('fs');
const util = require('util');

// fs.open('./003.txt','r',(err,fd)=>{
// 	if(err){
// 		console.og('open err....')
// 	}else{
// 		const buf = Buffer.alloc(10)
// 		fs.read(fd,buf,0,10,0,(err)=>{
// 			if(err){
// 				console.log('read err...')
// 			}else{
// 				fs.close(fd,(err)=>{
// 					if(err){
// 						console.log('close err...')
// 					}else{
// 						console.log(buf.toString());
// 					}
// 				})
// 			}
// 		})
// 	}
// })


// fs.readFile(path[, options], callback)
// fs.readFile('./003.txt',{flag:'r',encoding:'utf-8'},(err,data)=>{
// 	if(err){
// 		console.log('read err....');
// 	}else{
// 		console.log(data);
// 	}
// })


const f1 = util.promisify(fs.readFile);
f1('./003.txt',{flag:'r',encoding:'utf-8'})
.then(data=>{
	console.log(data)
})
.catch(err=>{
	console.log(err)
})