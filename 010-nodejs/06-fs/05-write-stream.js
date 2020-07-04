const fs = require('fs');

const ws = fs.createWriteStream('./005.txt');
ws.write('hello',()=>{
	console.log('write stream')
});
ws.on('finish',()=>{
	console.log('finish end');
});
ws.on('close',()=>{
	console.log('close....')
})
ws.end()