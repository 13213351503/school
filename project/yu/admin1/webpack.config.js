/*
* @Author: Chen
* @Date:   2019-11-25 19:16:58
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-10 18:41:05
*/
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	//指定开发环境
	mode: "development", // "production" | "development" | "none"
	// mode: "production", // "production" | "development" | "none"

	// 这里应用程序开始执行
  	// webpack 开始打包
  	//单一入口
	// entry: "./src/index.js",
	//多入口
	entry:{
		index:'./src/index.js',
	},
	//输出
	output: {// webpack 如何输出结果的相关选项
		// 所有输出文件的目标路径
   		// 必须是绝对路径（使用 Node.js 的 path 模块）
		path: path.resolve(__dirname, "dist"), // string

		// 「入口分块(entry chunk)」的文件名模板（出口分块？）
		filename: "[name]-[hash]-bundle.js", // string  
		//配置静态资源路径
		publicPath:'/' 
	},
	//配置别名
    resolve:{
        alias:{
            pages:path.resolve(__dirname,'./src/pages'),
            util:path.resolve(__dirname,'./src/util'),
            common:path.resolve(__dirname,'./src/common'),
            api:path.resolve(__dirname,'./src/api'),
        }
    },
	module: {
	    rules: [
	    //处理CSS
	    /*
	      {
	        test: /\.css$/,
	        use: [
	          'style-loader',
	          'css-loader'
	        ]
	      },
	     */
	     {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                }
              },
              "css-loader"
            ]
          },
	      //处理图片资源
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
			//配置babel
			{
			    test:/\.js$/,
			    exclude: /(node_modules)/,
			    use: {
			        loader: 'babel-loader',
			        options: {
			            // presets: ['env', 'react'],
			            presets: ['env','es2015','react','stage-3'],
			            plugins: [["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }]]
			        }
			    }               
			},
			//定制antd自定义主题
			{
                test: /\.less$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                }, {
                    loader: 'less-loader', // compiles Less to CSS
                    options: {
                        modifyVars: {
                            'primary-color': '#1DA57A',
                            'link-color': '#1DA57A',
                            'border-radius-base': '2px',
                        },
                        javascriptEnabled: true,
                    },
                }],
            }
	    ]
	 },
	plugins:[
		//自动生成HTML
	    new htmlWebpackPlugin({
	        template:'./src/index.html',//模板文件
	        filename:'index.html',//输出的文件名
	       	// inject:'head',//脚本写在那个标签里,默认是true(在body结束后)
	        hash:true,//给生成的js/css文件添加一个唯一的hash
	        chunks:['index','common']
	    }),
	    //自动清理多余文件
	    new CleanWebpackPlugin(),
	    //单独打包CSS文件
	    new MiniCssExtractPlugin({})
	],
	devServer:{
	    contentBase: './dist',//内容的目录
	    port:3001,//服务运行的端口,
	   	historyApiFallback:true,//h5路由刷新页面不向后台请求数据
	}
}