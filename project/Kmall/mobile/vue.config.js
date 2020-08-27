const path = require('path')



module.exports = {
	devServer:{
		port:3003,
	},
	pluginOptions: {
	    'style-resources-loader': {
			preProcessor: 'less',
			patterns: [
			path.resolve(__dirname, './src/assets/less/index.less')
			]
	    }
	},
	chainWebpack:config =>{
		config.resolve.alias
		.set('pages',path.resolve(__dirname,'./src/pages'))
		.set('api',path.resolve(__dirname,'./src/api'))
	} 
}