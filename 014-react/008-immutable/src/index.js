import React from 'react';
import { Provider } from 'react-redux'
import ReactDom from 'react-dom';
import App from './app.js'
import store from './store/index.js';






ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

