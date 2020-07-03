
console.log(process.argv);

const fs = require('fs')

const fileName = process.argv[2];
console.log(fileName)

fs.mkdirSync('./'+fileName)
fs.mkdirSync('./'+fileName+'/css')
fs.mkdirSync('./'+fileName+'/js')
fs.mkdirSync('./'+fileName+'/images')