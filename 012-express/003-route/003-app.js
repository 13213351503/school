const express = require('express')
const app = express()
const url = require('url')
const port = 3000

app.use(express.static('public'));


app.all('/',(req,res,next)=>{
	console.log('alway something');
	next();
})

// app.get('/', (req, res) =>{
// 	console.log(req.query);
// 	res.send('get!!!!')
// })

app.get('/user/:userID/da/:daID', (req, res) =>{
	console.log(req.params);
	res.send('get!!!!')
})

app.listen(3000, () => console.log('server is running this http://127.0.0.1:3000'))