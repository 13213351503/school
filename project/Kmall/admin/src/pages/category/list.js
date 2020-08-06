
import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './index.css'
import {  Breadcrumb, Table, Divider, Tag,Button } from 'antd';
import moment from 'moment';

import { actionCreator } from './store/index.js'
import  AdminLayout  from 'common/layout/index.js'
import {
  Link,
} from "react-router-dom";

//容器组件
class CategoryList extends Component{
	componentDidMount(){
		this.props.handlePage(1)
	}
	render(){
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
		    key: 'createdAt',
		    dataIndex: 'createdAt',
		  },
		];
		const { list,total,pageSize,current,handlePage,isFetching } = this.props;
		const dataSource = list.map((item)=>{
			return {
					key: item.get('_id'),
				    username: item.get('username'),
				    isAdmin: item.get('isAdmin'),
				    email: item.get('email'),
				    phone: item.get('phone'),
				    createdAt:moment(item.get('createdAt')).format('YYYY-MM-DD HH:mm:ss'),
				}
			}).toJS()
		return(
			<div className='CategoryList'>
			  <AdminLayout>
			  	<Breadcrumb style={{ margin: '16px 0' }}>
		          <Breadcrumb.Item>首页</Breadcrumb.Item>
		          <Breadcrumb.Item>分类管理</Breadcrumb.Item>
		          <Breadcrumb.Item>分类列表</Breadcrumb.Item>
		          <div className='btn'>
		          	<Link to='/category/add'><Button type="primary" className='btn-add'>新增分类</Button></Link>
		          </div>
			    </Breadcrumb>
			  	<div>
			  		<Table 
			  			columns={columns} 
			  			dataSource={[]} 
			  			loading={isFetching}
			  			pagination={{
			  				total:total,
			  				pageSize:pageSize,
			  				current:current
			  			}}
			  			onChange={(page)=>{
			  				//page.current当前页
			  				handlePage(page.current);
			  			}}
			  		/>
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
		list:state.get('user').get('list'),
		total:state.get('user').get('total'),
		pageSize:state.get('user').get('pageSize'),
		current:state.get('user').get('current'),
		isFetching:state.get('user').get('isFetching'),
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


export default connect(mapStateToProps,mapDispatchToProps)(CategoryList)