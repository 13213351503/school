import React,{ Component,Fragment } from 'react';
import './app.css'

class App extends Component{
	handelClick(){
		console.log(this);
		console.log('aaa');
	};
	handelChange(ev){
		console.log(ev.target.value);
	}
	render(){
		return (
				<div className="app">
					<input className="input" onChange={this.handelChange.bind(this)} />
					<button className="btn" onClick={this.handelClick.bind(this)}>提交</button>
					<ul className="list">
						<li>烧烤</li>
						<li>火锅</li>
						<li>啤酒</li>
					</ul>	
				</div>
		)
	}
}

export default App