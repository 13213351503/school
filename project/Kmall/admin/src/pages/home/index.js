
import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './index.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import {actionCreator} from './store/index.js'
import { AdminLayout } from 'common/layout/index.js'

//容器组件
class AdminHome extends Component{
	
	render(){
		return(
			<div className='AdminHome'>
			  <AdminLayout></AdminLayout>
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


export default connect(mapStateToProps,mapDispatchToProps)(AdminHome)