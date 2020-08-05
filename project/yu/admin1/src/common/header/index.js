/*
* @Author: Chen
* @Date:   2019-12-08 16:25:02
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-10 18:59:57
*/
import React,{Component} from 'react'
import { Layout, Menu, Breadcrumb, Icon, Dropdown } from 'antd';
import './index.css'
import { getUsername,removeUsername } from 'util'
import axios from 'axios'
import api from 'api'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class AdminHeader extends Component{
	constructor(props){
		super(props)
		this.handleLogout = this.handleLogout.bind(this)
	}
	handleLogout(){
		//发送请求清除后台session
		api.logout()
		.then(result=>{
			if(result.data.code == 0){
				//1.清除前台localStorage
				removeUsername()
				//2.返回到登录页面
				window.location.href = '/login'
			}
		})
		.catch(err=>{
			console.log(err)
		})
		/*
		axios({
			method:'delete',
			url:'http://127.0.0.1:3000/sessions/users'
		})
		.then(result=>{
			if(result.data.code == 0){
				//1.清除前台localStorage
				removeUsername()
				//2.返回到登录页面
				window.location.href = '/login'
			}
		})
		.catch(err=>{
			console.log(err)
		})
		*/

	}
	render(){
		const menu = (
			<Menu>
				<Menu.Item key="0" onClick={this.handleLogout}>
				  	<Icon type="logout" />退出
				</Menu.Item>
			</Menu>
		)
		return (
			<div className='AdminHeader'>
			    <Header className="header">
			      	<div className="logo">
			      		KMALL 后台管理系统
			      	</div>
			      	<Dropdown overlay={menu} trigger={['click']} className="drop-down">
					    <a className="ant-dropdown-link" href="#">
					      {getUsername()}<Icon type="down" />
					    </a>
					</Dropdown>
			    </Header>
			</div>
		)
	}
}

export default AdminHeader