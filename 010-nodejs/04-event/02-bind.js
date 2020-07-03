const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const emitter = new MyEmitter();

emitter.on('test',()=>{
	console.log('qqq1');
})
// emitter.on('test',()=>{
// 	console.log('qqq2');
// })
// emitter.addListener('test',()=>{
// 	console.log('qqq3');
// })
// emitter.addListener('test',()=>{
// 	console.log('qqq4');
// })

// emitter.once('test',()=>{		//多次调用也只会打印一次
// 	console.log('qqq4');
// })
// emitter.once('test',()=>{
// 	console.log('qqq4');
// })

//emitter.addListener和emitter.on(eventName, listener)是同一个方法
// console.log(emitter.on == emitter.addListener)




// 一个EventEmitter对象默认最大可以有10个监听,可以通过emitter.setMaxListeners(n)来设置最大监听数
emitter.setMaxListeners(12) 

emitter.on('test',()=>{
	console.log('qqq1');
})
emitter.on('test',()=>{
	console.log('qqq2');
})
emitter.on('test',()=>{
	console.log('qqq3');
})
emitter.on('test',()=>{
	console.log('qqq4');
})
emitter.on('test',()=>{
	console.log('qqq5');
})
emitter.on('test',()=>{
	console.log('qqq6');
})
emitter.on('test',()=>{
	console.log('qqq7');
})
emitter.on('test',()=>{
	console.log('qqq8');
})
emitter.on('test',()=>{
	console.log('qqq9');
})
emitter.on('test',()=>{
	console.log('qqq10');
})
emitter.on('test',()=>{
	console.log('qqq11');
})


emitter.emit('test');