import React from 'react';
import ReactDom from 'react-dom';
import App from './app.js'

ReactDom.render(
	<App />,
	document.getElementById('root')

)

// function tick(){
// 	const timer = (
// 		<div>
// 			<h1>许昌时间</h1>
// 			<p>{new Date().toLocaleString()}</p>
// 		</div>
// 	)
// 	ReactDom.render(
// 		timer,
// 		document.getElementById('root')
// 	)
// }
// setInterval(tick,1000)