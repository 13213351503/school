const express = require('express')
const app = express()
const port = 3000
const router = require('./routers/user.js')
const blogRouter = require('./routers/blog.js')

app.use(express.static('public'));

// app.get('/user', (req, res) => res.send('user get!!!!'))
// app.post('/user', (req, res) => res.send('user post!!!!'))
// app.put('/user', (req, res) => res.send('user put!!!!'))
// app.delete('/user', (req, res) => res.send('user delete!!!!'))

app.use('/user',router)
app.use('/blog',blogRouter)

app.listen(3000, () => console.log('server is running this http://127.0.0.1:3000'))