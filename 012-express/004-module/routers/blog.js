const express = require('express')
const route = express.Router()  

route.get('/', (req, res) => res.send('blog get!!!!'))
route.post('/', (req, res) => res.send('blog post!!!!'))
route.put('/', (req, res) => res.send('blog put!!!!'))
route.delete('/', (req, res) => res.send('blog delete!!!!'))



module.exports = route;