const express = require('express')
const app = express()
const url = require('url')
const port = 3000

app.use(express.static('public'));


// app.all('/',(req,res,next)=>{
// 	console.log('alway something');
// 	next();
// })

app.get('/', (req, res) =>{
	// res.end('get!!!!');		//字符串
	// res.end('<h1>你好</h1>');	//字符串
	// res.end({name:'tom'});		//报错


	// res.json('get!!!!');		//字符串
	// res.json('<h1>你好</h1>');	//字符串
	// res.json({name:'tom'});	//对象


	 // res.send('get!!!!');		//字符串
	// res.send('<h1>你好</h1>');	//字符串
	res.send({name:'tom'});			//对象
})


app.listen(3000, () => console.log('server is running this http://127.0.0.1:3000'))