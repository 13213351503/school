
import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './index.css'
import {  Breadcrumb, Table, Divider, Tag } from 'antd';
import moment from 'moment';

import { actionCreator } from './store/index.js'
import  AdminLayout  from 'common/layout/index.js'

//容器组件
class User extends Component{
	componentDidMount(){
		this.props.handlePage(1)
	}
	render(){
		const { list } = this.props;
		const columns = [
		  {
		    title: '用户名',
		    dataIndex: 'username',
		    key: 'username',
		    render: username => <a>{username}</a>,
		  },
		  {
		    title: '是否是管理员',
		    dataIndex: 'isAdmin',
		    key: 'isAdmin',
		    render: isAdmin => (isAdmin ? '是' : '否')
		  },
		  {
		    title: '邮箱',
		    dataIndex: 'email',
		    key: 'email',
		  },
		  {
		    title: '电话',
		    key: 'phone',
		    dataIndex: 'phone',
		  },
		   {
		    title: '创建时间',
		    key: 'createrAt',
		    dataIndex: 'createrAt',
		  },
		];

		const dataSource = list.map((item)=>{
			return {
				key: item.get('_id'),
			    username: item.get('username'),
			    isAdmin: item.get('isAdmin'),
			    email: item.get('email'),
			    phone: item.get('phone'),
			    createdAt:moment(item.get('createdAt')).format('YYYY-MM-DD HH:mm:ss')
			}
		}).toJS()
		return(
			<div className='AdminUser'>
			  <AdminLayout>
			  	<Breadcrumb style={{ margin: '16px 0' }}>
		          <Breadcrumb.Item>首页</Breadcrumb.Item>
		          <Breadcrumb.Item>用户列表</Breadcrumb.Item>
			    </Breadcrumb>
			  	<div>
			  		<Table columns={columns} dataSource={dataSource} />
			  	</div>
			  </AdminLayout>
			</div>	
		)
	}
}




//将属性映射到组件中
const mapStateToProps = (state)=>{
	// console.log(state)
	return {
		list:state.get('user').get('list')
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handlePage:(page)=>{
			dispatch(actionCreator.getPageAction(page))
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(User)