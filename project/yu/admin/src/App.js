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
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { getUsername } from 'util'

import Home from 'pages/home/index.js'
import User from 'pages/user/index.js'
import Login from 'pages/login/index.js'
import Err from 'common/err/index.js'



class App extends Component{
	render(){
		const HomeRoute = ({ component:Component,...rest}) =>(
				<Route 
					{...rest}
					render={(props)=>{
						return getUsername() ? <Component /> : <Redirect to='/login' />
					}}

				/>
			)
		const LoginRoute = ({ component:Component,...rest}) =>(
				<Route 
					{...rest}
					render={(props)=>{
						return getUsername() ? <Redirect to='/' /> : <Component />
					}}

				/>
			)
		return(
			<Router>
				<div className='App'>
					<Switch>
						<HomeRoute exact path='/' component={Home} />
						<HomeRoute path='/user' component={User} />
						<LoginRoute path='/login' component={Login} />
						<Route component={Err} />
					</Switch>
				</div>
			</Router>
		)
	}
}



export default App