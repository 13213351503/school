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

import AdminHome from './pages/home/index.js';
import Login from './pages/login/index.js';
// 引入后台管理中心用户列表路由的UI组件
import User from './pages/user/index.js';
// 引入错误路由页面的UI组件
import Err from 'common/err'

class App extends Component{
	render(){
		const HomeRoute = ({ component:Component, ...rest }) => {
			return <Route
				{...rest}
				render={(props) => {
					return getLocalStorage() ? <Component /> : <Redirect to="/login" />
				}}
			/>
		}
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
						<HomeRoute exact path='/' component={AdminHome} />
						<HomeRoute path='/user' component={User} />
						<LoginRoute path='/login' component={Login} />
						<Route component={Err} />
						<Route path="/logout" component={Login} />
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App