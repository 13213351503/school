
import React,{Component} from 'react'
import './index.css'
import {
  Route,
  Link,
  Switch,
} from "react-router-dom";
import ProductSave from './save.js'
import ProductList from './list.js'
//容器组件
class Category extends Component{
	render(){
		return(
			<div className='Category'>
				<Switch>
			  		<Route path='/product/save/:productId?' component={ProductSave} />
			  		<Route path='/product' component={ProductList} />
			  	</Switch>
			</div>	
		)
	}
}

export default Category