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
		    title: '分类名称',
		    dataIndex: 'name',
		    key: 'name',
		    render: name => <a>{name}</a>,
		  },
		  {
		    title: '手机分类',
		    dataIndex: 'mobileName',
		    key: 'mobileName',
		  },
		  {
		    title: '是否显示',
		    dataIndex: 'isShow',
		    key: 'isShow',
		  },
		  {
		    title: '排序',
		    key: 'order',
		    dataIndex: 'order',
		  },
		  
		];
		const { list,total,pageSize,current,handlePage,isFetching } = this.props;
		const dataSource = list.toJS()
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
			  			dataSource={dataSource} 
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
		list:state.get('category').get('list'),
		total:state.get('category').get('total'),
		pageSize:state.get('category').get('pageSize'),
		current:state.get('category').get('current'),
		isFetching:state.get('category').get('isFetching'),
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