const EventEmitter = require('events');//返回的是一个类
// console.log(EventEmitter);
// 

// const Emitter = new EventEmitter();

// Emitter.on('test',()=>{
// 	console.log('aaa');
// })
// Emitter.emit('test');



// 
class MyEmitter extends EventEmitter{};

const Emitter = new MyEmitter();




Emitter.on('test',()=>{
	console.log('aaa');
})
Emitter.emit('test');