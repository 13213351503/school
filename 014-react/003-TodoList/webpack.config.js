const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
	mode:'development',		//指定开发环境	production/development
	// entry: './src/index.js',	//指定入口路径,	单入口写法
	entry:{
		index:'./src/index.js',
	},
	output: {					//指定出口路径
	  // filename: 'main.js',		//单入口写法
	  filename:'[name]-[hash].main.js',
	  path: path.resolve(__dirname, 'dist')
	},
	module: {
	    rules: [
	    	//配置css文件
	        {
	            test: /\.css$/,
	            use: [
	             'style-loader',
	             'css-loader'
	            ]
	        }, 
	        //配置图片 
	        {
				test: /\.(png|jpg|gif)$/i,
				use: [
			  		{
			    		loader: 'url-loader',
			    			options: {
			      			limit: 10
			    		}
			  		}
				]
			},
			{
			    test:/\.js$/,
			    exclude: /(node_modules)/,
			    use: {
			        loader: 'babel-loader',
			        options: {
			            presets: ['env', 'react']
			        }
			    }               
			},
	    ]
	},
	plugins:[
	    new htmlWebpackPlugin({
	        template:'./src/index.html',//模板文件
	        filename:'index.html',//输出的文件名
	        inject:'true',//脚本写在那个标签里,默认是true(在body结束后)
	        hash:true//给生成的js/css文件添加一个唯一的hash
	    }),
	    new CleanWebpackPlugin()
	],
};