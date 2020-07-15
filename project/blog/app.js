const express = require('express')
const app = express()
const mongoose = require('mongoose')
const swig = require('swig')
const bodyParser = require('body-parser')

//链接数据库
// mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true})
mongoose.connect('mongodb://localhost/blog', { useUnifiedTopology: true,useNewUrlParser: true });

const db = mongoose.connection;

db.on('error',(err)=>{
	console.log('connect db err ...')
	throw err
})
db.once('open', function(){
	console.log('connect success !!!')
})


app.use(express.static('public'));

//中间件配置开始

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// 配置中间件信息后post的参数会被存在req.body

//中间件配置结束



//设置缓存
//开发阶段设置不走缓存
swig.setDefaults({
  cache: false
})
//配置应用模板
app.engine('html', swig.renderFile);
//		第一个参数是模板名称,同时也是模板文件的扩展名
//		第二个参数是解析模板的方法
//配置模板的存放目录
app.set('views', './views')
//		第一参数必须是views
//		第二个参数是模板存放的目录
//注册模板引擎
app.set('view engine', 'html')

app.use('/',require('./routers/index.js'))
app.use('/user',require('./routers/user.js'))



app.listen(3000, () => {
	console.log('server is running this http://127.0.0.1:3000')
})
	