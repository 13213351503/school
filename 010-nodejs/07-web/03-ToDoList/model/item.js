
const fs = require('fs');
const util = require('util');
const path = require('path')

const fileName = path.normalize(__dirname + '/../data/item.json');
const readFile = util.promisify(fs.readFile);

const writeFile = util.promisify(fs.writeFile);
async function get(){
	//1.读取文件数据
	const data = await readFile(fileName,{flag:'r',encoding:'utf-8'})
	//2.返回数据
	// console.log(data)
	const arr = JSON.parse(data);
	return arr;
}

async function add(task){
	//1.读取数据
	const data = await readFile(fileName,{flag:'r',encoding:'utf-8'})
	//2.将字符串数据转化为数组
	const arr = JSON.parse(data);
	//3.生成任务对象并添加到数组中
	const obj = {
		id:Date.now().toString(),
		task:task
	};
	arr.push(obj);
	//4.将最新的数据覆盖写入到文件中
	await writeFile(fileName,JSON.stringify(arr));
	//5.返回任务对象
	// console.log(task);
	return obj;
}

async function del(id){
	//1.读取数据
	const data = await readFile(fileName,{flag:'r',encoding:'utf-8'})
	//2.将数据转化为数组
	const arr = JSON.parse(data);
	//3.根据ID筛选选出数组中的数据
	const newArr = arr.filter(item=>{
		return item.id != id;
	});
	//4.将最新的数据覆盖写入到文件中
	await writeFile(fileName,JSON.stringify(newArr));
}
module.exports = {
	get,
	add,
	del,
}