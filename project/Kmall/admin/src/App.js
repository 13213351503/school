
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
import Category from 'pages/category/index.js'
import Login from 'pages/login/index.js'
import Err from 'common/err/index.js'
import apiObj from 'api/index.js'



class App extends Component{
	render(){
		// console.log(apiObj);
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
						<HomeRoute path='/category' component={Category} />
						<LoginRoute path='/login' component={Login} />
						<Route component={Err} />
					</Switch>
				</div>
			</Router>
		)
	}
}



export default App