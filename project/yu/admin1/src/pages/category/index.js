/*
* @Author: Chen
* @Date:   2019-12-11 19:10:22
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-11 19:24:08
*/
import React,{Component} from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";

import CategoryList from './list.js'
import CategoryAdd from './add.js'


class Category extends Component{
	render(){
		return (
			<div className='Category'>
				<Switch>
					<Route exact path='/category/' component={CategoryList} />
					<Route path='/category/add' component={CategoryAdd} />
				</Switch>
			</div>
		)
	}
}

export default Category