import React,{Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './index.css';
import { Breadcrumb,Table, Divider, Tag } from 'antd';
import moment from 'moment';// 修改时间组件

import {actionCreator} from './store/index.js';
import AdminLayout from 'common/layout';// 公共模板

//容器组件
class User extends Component{
	componentDidMount(){
		// 
		this.props.handlePage(1);
	}
	render(){
		const { list,total,pageSize,current,handlePage } = this.props;
		const columns = [
		  {
		    title: 'UserName',
		    dataIndex: 'username',
		    key: 'username',
		    render: text => <a>{text}</a>,
		  },
		  {
		    title: 'IsAdmin',
		    dataIndex: 'isAdmin',
		    key: 'isAdmin',
		    render: isAdmin => (isAdmin ? '是' : '否'),
		  },
		  {
		    title: 'Email',
		    dataIndex: 'email',
		    key: 'email',
		  },
		  {
		    title: 'Phone',
		    dataIndex: 'phone',
		    key: 'phone',
		  },
		  {
		    title: 'CreatedAt',
		    dataIndex: 'CreatedAt',
		    key: 'CreatedAt',
		  },
		];
		
		// console.log(list);
		// 把immutable对象(数据)转化成数组
		const dataSource = list.map((item) => {
			// 1.遍历immutable数据;
			// 2.把遍历后 单独的immutable对象的数据的值提取出来(还是immutable数据);
			// 3.把返回的 单独的immutable数据(item) 转化成 数组(普通的数据,数组也是对象);
			// console.log(item);
			// console.log(item.get('username'));
			return {
			    key: item.get('_id'),
			    username: item.get('username'),
			    isAdmin: item.get('isAdmin'),
			    email: item.get('email'),
			    phone: item.get('phone'),
			    CreatedAt: moment(item.get('CreatedAt')).format('YY-MM-DD HH:mm:ss'),
			}
		}).toJS()
		// console.log(dataSource);// 数组

		return(
			<div className='User'>
			  <AdminLayout>
	            <Breadcrumb style={{ margin: '16px 0' }}>
	              <Breadcrumb.Item>首页</Breadcrumb.Item>
	              <Breadcrumb.Item>用户列表</Breadcrumb.Item>
	            </Breadcrumb>
			    <div className="content">
			    	<Table 
			    		columns={columns} 
			    		dataSource={dataSource} 
			    		pagination={{
			    			total:total,
			    			pageSize:pageSize,
			    			current:current
			    		}}
			    		onChange={ (page)=>{// 点击分页器按钮时触发
			    			console.log(page);
			    			handlePage(page.current);
			    		} }
			    	/>
			    </div>
			  </AdminLayout>
			</div>	
		)
	}
}

//将属性映射到组件中
const mapStateToProps = (state)=>{
	return {
		list:state.get('user').get('list'),
		total:state.get('user').get('total'),
		pageSize:state.get('user').get('pageSize'),
		current:state.get('user').get('current'),
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handlePage:(page)=>{
			// 调用派发action的函数(分页)
			dispatch(actionCreator.getPageAction(page));
		},
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(User);