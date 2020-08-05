/*
* @Author: Chen
* @Date:   2019-11-26 20:27:58
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-03 16:26:24
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App.js'
ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.getElementById('root')
)

