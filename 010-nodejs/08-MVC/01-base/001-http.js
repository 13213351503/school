// const http = require('http');

// const server = http.createServer((req,res)=>{
// 	//req是可读流
// 	//res是可写流
// 	res.end('congratulations')
// })

// server.listen(3000,'127.0.0.1',()=>{
// 	console.log('running in http://127.0.0.1:3000');
// })





const http = require('http');

// const hostname = '192.168.137.28';
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	
  res.statusCode = 200;
  res.end('how are you');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});