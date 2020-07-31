/*
* @Author: Chen
* @Date:   2019-11-28 19:10:50
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-06 15:23:43
*/
import React,{Component} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TodoList from 'pages/todolist/index.js'
import Login from 'pages/login/index.js'



class App extends Component{
	render(){
		return(
			<Router>
				<div className='App'>
					<Route exact path='/' component={TodoList} />
					<Route path='/login' component={Login} />
				</div>
			</Router>
		)
	}
}



export default App