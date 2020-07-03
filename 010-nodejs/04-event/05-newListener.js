const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};

const emitter = new MyEmitter();

//添加自定义事件后自动触发newListener事件，eventName就是自定义事件名，callback就是自定义事件执行内容
emitter.on('newListener',(eventName,callback)=>{	

	console.log('eventName::',eventName);
	callback();
})

emitter.on('show',()=>{
	console.log('show........')
})
emitter.on('test',()=>{
	console.log('test........')
})