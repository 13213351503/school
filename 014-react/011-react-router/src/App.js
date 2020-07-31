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

import TodoList from './pages/todolist/index.js'


class Home extends Component{
	render(){
		return (
			<h2>this is home page</h2>
		)
	}
}
class User extends Component{
	render(){
		// console.log(this.props.match.params.id)
		return (
			<h2>this is user page,user id this {this.props.match.params.id}</h2>
		)
	}
}
class Admin extends Component{
	render(){
		return (
			<Switch>
				<Route exact path='/admin' render={(props)=>(<h2>this is admin page</h2>)} />
				<Route path='/admin/article' render={(props)=>(<h2>this is admin article page</h2>)} />
				<Route path='/admin/:id' render={(props)=>(<h2>this is admin page,admin id is{props.match.params.id}</h2>)} />
			</Switch>
		)
	}
}

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			isAdmin:true
		}
	}
	render(){
		const ProtectRoute = ({component:Component,...rest})=>{
			// console.log(rest)
			return <Route 
				{...rest}
				render={(props)=>{
					return this.state.isAdmin ? <Component {...props} /> : <h2>this is login page</h2>
				}}
			/>
		}
		return(
			<Router>
				<div className='App'>
					<nav>
						<ul>
							<li><Link to='/'>home</Link></li>
							<li><Link to='/todolist'>TodoList</Link></li>
							<li><Link to='/about'>About</Link></li>
							<li><Link to='/user/123'>User/Id</Link></li>
							<li><Link to='/admin'>Admin</Link></li>
							<li><Link to='/admin/123'>Admin/123</Link></li>
							<li><Link to='/admin/article'>Admin/article</Link></li>
						</ul>
						<Route exact path='/' component={Home} />
						<Route path='/todolist' component={TodoList} />
						<Route path='/about' render={()=>(<h2>this is about page</h2>)} />
						<Route path='/user/:id' component={User} />
						<ProtectRoute path='/admin' component={Admin} />
					</nav>
				</div>
			</Router>
		)
	}
}



export default App