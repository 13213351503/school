const express = require('express')
const app = express()
const port = 3000
const swig = require('swig')

app.use(express.static('public'));

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
	//		第一个参数必须是view engine
	//		第二个参数是模板名称,也就是app.engine的第一个参数
	//渲染模板
	app.get('/',(req,res)=>{
	    //4.渲染模板
	    //第一个参数是相对于模板目录的文件
	    //第二个参数是传递给模板的数据
    	res.render('base',{
    		title:'首页',
    		name:'James',
    		friends:['Kobe','Wade','Bosh','Bird','Cuury']
    	})
	})

app.listen(3000, () => console.log('server is running this http://127.0.0.1:3000'))