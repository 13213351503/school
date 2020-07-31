import React,{ Component,Fragment } from 'react';
import './app.css';
import TodoList from './pages/ToDoList/index.js'
import Home from './pages/home/index.js'
import { connect } from 'react-redux'


class App extends Component{
	
	render(){
		return (
			<div>
				<TodoList />
				<Home />
			</div>
		)
	}
}


export default connect(null,null)(App)