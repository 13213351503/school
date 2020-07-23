const path = require('path');

module.exports = {
	mode:'production',		//指定开发环境	production/development
	// entry: './src/index.js',	//指定入口路径,	单入口写法
	entry:{
		index:'./src/index.js',
		about:'./src/about.js',
		content:'./src/content.js'
	},
	output: {					//指定出口路径
	  // filename: 'main.js',		//单入口写法
	  filename:'[name]-[hash].main.js',
	  path: path.resolve(__dirname, 'dist')
	},
	module: {
	    rules: [
	        {
	            test: /\.css$/,
	            use: [
	             'style-loader',
	             'css-loader'
	            ]
	        },  
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
			}
	    ]
	},
	
};