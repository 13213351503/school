
import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './index.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import {actionCreator} from './store/index.js'
import  AdminLayout  from 'common/layout/index.js'

//容器组件
class AdminUser extends Component{
	
	render(){
		return(
			<div className='AdminUser'>
			  <AdminLayout>
			  	<Breadcrumb style={{ margin: '16px 0' }}>
		          <Breadcrumb.Item>User</Breadcrumb.Item>
		          <Breadcrumb.Item>List</Breadcrumb.Item>
		          <Breadcrumb.Item>App</Breadcrumb.Item>
			    </Breadcrumb>
			  	haha
			  </AdminLayout>
			</div>	
		)
	}
}




//将属性映射到组件中
const mapStateToProps = (state)=>{
	console.log(state)
	return {

	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(AdminUser)