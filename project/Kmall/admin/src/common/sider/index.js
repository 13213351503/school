
import React,{Component} from 'react'
import './index.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import AdminHeader from 'common/header/index.js';
import {
  Link,
  NavLink
} from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

//容器组件
class AdminSider extends Component{
	
	render(){
		return(
			<div className='AdminSider'>
			  <Sider width={200} style={{ background: '#fff', height:720}}>
		        <Menu
		          mode="inline"
		          style={{ height: '100%', borderRight: 0, }}
		        >
		            <Menu.Item key="1">
		            	<NavLink exact to='/'><Icon type="home" /> 首页</NavLink>
		            </Menu.Item>
		            <Menu.Item key="2">
		            	<NavLink to='/user'><Icon type="user" /> 用户列表</NavLink>
		            </Menu.Item>
		            <Menu.Item key="3">
		            	<NavLink to='/category'><Icon type="menu" /> 分类管理</NavLink>
		            </Menu.Item>
		        </Menu>
		      </Sider>
			</div>	
		)
	}
}

export default AdminSider