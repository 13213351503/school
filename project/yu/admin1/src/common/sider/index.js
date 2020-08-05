/*
* @Author: Chen
* @Date:   2019-12-08 16:25:02
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-29 16:53:42
*/
import React,{Component} from 'react'
import { Layout, Menu, Icon } from 'antd';
import { NavLink,Link } from "react-router-dom";
import './index.css'

const { SubMenu } = Menu;
const {  Sider } = Layout;

class AdminSider extends Component{
	render(){
		return (
			<div className='AdminSider'>
				<Sider width={200} style={{ background: '#fff',minHeight:760 }}>
			        <Menu
			          style={{ height: '100%', borderRight: 0 }}
			        >
			            <Menu.Item key="1">
			            	<NavLink exact to='/'><Icon type="home" />首页</NavLink>
			            </Menu.Item>
			            <Menu.Item key="2">
			            	<NavLink exact to='/user'><Icon type="user" />用户管理</NavLink>
			            </Menu.Item>
			            <Menu.Item key="3">
			            	<NavLink to='/category'><Icon type="menu" />分类管理</NavLink>
			            </Menu.Item>
			            <Menu.Item key="4">
			            	<NavLink to='/product'><Icon type="shopping" />商品管理</NavLink>
			            </Menu.Item>
			            <Menu.Item key="5">
	                      	<NavLink to="/order"><Icon type="dollar" />订单管理</NavLink>
	                    </Menu.Item>
			            <Menu.Item key="6">
			            	<NavLink to='/ad'><Icon type="fund" />广告管理</NavLink>
			            </Menu.Item>
			        </Menu>
			    </Sider>
			</div>
		)
	}
}

export default AdminSider