
const {Writable} =require('stream');

class CustomStream extends Writable{
	_write(chunk, encoding, callback){
		console.log(chunk);
		// console.log(encoding);
		callback();
	}
}

const write = new CustomStream();

write.write('hellow',()=>{
	console.log('aaa');
});
write.end();						//缓冲数据都已传给底层系统之后触发。
write.on('finish',()=>{
	console.log('write end...')
})