import React,{Component} from 'react'
import './index.css'
import axios from 'axios'
import { Layout,Menu,Breadcrumb,Icon,Dropdown } from 'antd';
import apiObj from '../../api/index.js';

import { getLocalStorage,removeLocalStorage } from 'util';// 获取查看cookie

const { SubMenu } = Menu;
const { Header} = Layout;

//容器组件
class AdminHeader extends Component{
	constructor(props){
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}
	handleLogout(){
		// 先发送ajax再派送action
		apiObj.logout()
		.then(result=>{
			// 派发action
			// dispatch(getLoadInitAction(result.data));
			// console.log(result);
			const data = result.data;
			if(data.code == 0){// 退出成功
				// 1.删除用户状态
				removeLocalStorage();
				// 2.退出成功,跳转到管路员登录页面
				window.location.href = '/login';
			}else{// 登录失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('退出失败,请稍候再试!');
		})
		/*
		// 先发送退出ajax再派送action
		axios({
			method:'delete',
			url:'http://127.0.0.1:3000/sessions/users'// 请求的地址
		})
		.then(result=>{
			// 派发action
			// dispatch(getLoadInitAction(result.data));
			// console.log(result);
			const data = result.data;
			if(data.code == 0){// 退出成功
				// 1.删除用户状态
				removeLocalStorage();
				// 2.退出成功,跳转到管路员登录页面
				window.location.href = '/login';
			}else{// 登录失败
				message.error(data.message);
			}
		})
		.catch(err=>{
			console.log(err);
			message.error('退出失败,请稍候再试!');
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
		);
		return(
			<div className='AdminHeader'>			   
				<Header className="header">
			      <div className="logo">
				      <Icon type="html5" /> ZMALL 小猪猪 后台管理系统
			      </div>
			      <div className="logout">
					  <Dropdown overlay={menu} trigger={['click']}>
					    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
					      {getLocalStorage()} <Icon type="down" />
					    </a>
					  </Dropdown>
				  </div>
			    </Header>
			</div>	
		)
	}
}

export default AdminHeader;