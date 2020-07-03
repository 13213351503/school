const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};

const emitter = new MyEmitter();

emitter.on('test',(arg1,arg2)=>{
	console.log(arg1,arg2);
})
const arr = [5,6]
// emitter.emit('test','tom','18');
// emitter.emit('test',arr[0],arr[1]);
emitter.emit('test',...arr);