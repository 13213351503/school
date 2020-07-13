const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('server is running this http://127.0.0.1:3000'))