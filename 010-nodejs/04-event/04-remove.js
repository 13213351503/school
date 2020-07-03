const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};

const emitter = new MyEmitter();

let show1 = ()=>{
	console.log('show1.....')
};
let show2 = ()=>{
	console.log('show2.....')
};

emitter.on('show',show1);
emitter.on('show',show2);


emitter.off('show',show1);
emitter.removeListener('show',show2);
console.log(emitter.off === emitter.removeListener);	//emitter.removeListener和emitter.off是同一个方法


emitter.emit('show');