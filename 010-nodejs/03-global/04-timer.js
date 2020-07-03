// const t1 = setTimeout(()=>{
// 	console.log('t1.....')
// },300)
// clearTimeout(t1);
// console.log('after ......')

// const t2 = setInterval(()=>{
// 	console.log('t2.....')
// },1000);
// clearInterval(t2);
// console.log('after.....');

const t3 = setImmediate(()=>{
	console.log('t3...');
})
// clearImmediate(t3); 
// console.log('after....');

// 方法将 callback 添加到下一个时间点的队列。 一旦当轮的事件循环全部完成，则调用下一个时间点的队列中的所有回调。
process.nextTick(()=>{			//属于异步程序，在异步程序中总是第一个执行
	console.log('after...')
}); 