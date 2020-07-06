
const fs = require('fs');
const util = require('util');
const path = require('path')

const fileName = path.normalize(__dirname + '/../data/item.json');
const readFile = util.promisify(fs.readFile)
async function get(){
	//1.读取文件数据
	const data = await readFile(fileName,{flag:'r',encoding:'utf-8'})
	//2.返回数据
	// console.log(data)
	const arr = JSON.parse(data)
	return arr
}
module.exports = {
	get
}