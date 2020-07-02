//用相对路径时注意,当前目录一定要写“./”,否则表明要加载系统的核心模块
const req = require('./m4.js');
console.log(req.str);
console.log(req.obj);
console.log(req.fn);
req.fn();