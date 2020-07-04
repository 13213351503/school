const fs = require('fs');

//fs.openSync(path[, flags, mode])
// const fd = fs.openSync('./003.txt','r');

// // fs.readSync(fd, buffer, offset, length, position)
// const buf = Buffer.alloc(10); 
// fs.readSync(fd,buf,0,10,0);
// // console.log(buf.string())

// //fs.closeSync(fd)
// fs.closeSync(fd);

// console.log(buf.toString());




// fs.readFileSync(path[, options])
const buf = fs.readFileSync('./003.txt',{flag:'r',encoding:string});
console.log(buf);
// console.log(buf.toString());