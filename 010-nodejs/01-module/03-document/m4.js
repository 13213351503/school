// console.log(exports);
// console.log(module.exports);
// console.log(exports === module.exports);


const str = 'aaa';
const obj = {
	name:'Tom'
};
const fn = ()=>{
	console.log('fnfnfn')
};

// exports.str = str;
// exports.obj = obj;
// exports.fn = fn;



module.exports = {
	str,
	obj,
	fn
}