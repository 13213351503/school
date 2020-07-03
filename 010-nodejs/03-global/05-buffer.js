
//Buffer是用来存放二进制数据的容器
//会将数据已十六进制数据存储
//一个二进制的0 或者 1 代表了 1bit(位)
//8bit(位) = 1B(字节) = 2个十六进制数


// const buf = Buffer.from('a');//61
// const buf = Buffer.from('b');//62
// const buf = Buffer.from('c');//63
// const buf = Buffer.from('1');//31
// const buf = Buffer.from('6');//36





// const buf = Buffer.alloc(5);
const buf = Buffer.alloc(5,'b');


console.log(buf);