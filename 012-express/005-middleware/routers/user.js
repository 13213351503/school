const express = require('express')
const route = express.Router()  

route.get('/', (req, res) => res.send('user get!!!!'))
route.post('/', (req, res) => res.send('user post!!!!'))
route.put('/', (req, res) => res.send('user put!!!!'))
route.delete('/', (req, res) => res.send('user delete!!!!'))



module.exports = route;