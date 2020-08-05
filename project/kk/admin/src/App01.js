import React,{Component} from 'react';
import './App.css';
// 引入路由组件
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { getLocalStorage } from 'util';// 获取查看cookie


import TodoList from './pages/todolist/index.js';
import Login from './pages/login/index.js';
// 引入错误路由页面的组件
import Err from '../src/common/err'

class App extends Component{
	render(){
		const HomeRoute = ({ component:Component, ...rest }) => (
			<Route 
				{...rest} 
				render={(props) => {
					return getLocalStorage() ? <Component /> : <Redirect to="/login" />
				}}
			/>
		)
		const LoginRoute = ({ component:Component, ...rest }) => (
			<Route 
				{...rest} 
				render={(props) => {
					return getLocalStorage() ? <Redirect to="/" /> : <Component />
				}}
			/>
		)
		return(
			<Router>
				<div className='App'>
					<Switch>
						<HomeRoute exact path='/' component={TodoList} />
						<LoginRoute path='/login' component={Login} />
						<Route component={Err} />
					</Switch>
				</div>
			</Router>
		)
	}
}



export default App