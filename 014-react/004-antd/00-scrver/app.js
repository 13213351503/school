// const http = require('http')

// const server = http.createServer((req,res)=>{
// 	res.setHeader('Access-Control-Allow-Origin', '*');// 请求头
// 	res.end(JSON.stringify(['啤酒','饮料','矿泉水']));
// });

// server.listen(3000,'127.0.0.1',()=>{
// 	console.log('server is running http://127.0.0.1:3000')
// })


const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');;
  res.end(JSON.stringify(['啤酒','饮料','矿泉水']));
});

server.listen(3000, '127.0.0.1', ()=>{
  console.log('server is running http://127.0.0.1:3000');
});
