const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));


app.all('/',(req,res,next)=>{
	console.log('alway something');
	next();
})

app.get('/', (req, res) => res.send('get!!!!'))
app.post('/', (req, res) => res.send('post!!!!'))
app.put('/', (req, res) => res.send('put!!!!'))
app.delete('/', (req, res) => res.send('delete!!!!'))

app.listen(3000, () => console.log('server is running this http://127.0.0.1:3000'))