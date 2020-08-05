/*
* @Author: Chen
* @Date:   2019-11-28 19:10:50
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-29 16:52:41
*/
import React,{Component} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import {getUsername} from 'util'

import Login from 'pages/login'
import Home from 'pages/home'
import User from 'pages/user'
import Category from 'pages/category'
import Product from 'pages/product'
import Ad from 'pages/ad'
import Order from 'pages/order'
import Err from 'common/err'


import api from 'api'


class App extends Component{
	render(){
		// api.login({id:123})
		const HomeRoute = ({component:Component,...rest})=>{
			return (
				<Route 
					{...rest}
					render={(props)=>{
						return getUsername() ? <Component /> : <Redirect to='/login' />
					}}
				/>
			)
		}
		const LoginRoute = ({component:Component,...rest})=>{
			return (
				<Route 
					{...rest}
					render={(props)=>{
						return getUsername() ? <Redirect to='/' /> : <Component />
					}}
				/>
			)
		}
		return(
			<Router forceRefresh={true}>
				<div className='App'>
					<Switch>
						<HomeRoute exact path='/' component={Home} />
						<HomeRoute path='/user' component={User} />
						<HomeRoute path='/category' component={Category} />
						<HomeRoute path='/product' component={Product} />
						<HomeRoute path='/ad' component={Ad} />
						<HomeRoute path='/order' component={Order} />
						<LoginRoute path='/login' component={Login} />
						<Route component={Err} />
					</Switch>
				</div>
			</Router>
		)
	}
}



export default App