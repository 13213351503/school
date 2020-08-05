import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './index.css'
import { Layout, Menu, Breadcrumb, Icon,Card, Col, Row } from 'antd';

import {actionCreator} from './store/index.js'
import AdminLayout from 'common/layout'

//容器组件
class AdminHome extends Component{
	componentDidMount(){
		// 发送请求统计数量
		this.props.handleCounts();
	}
	render(){
		const { usernum,ordernum,productnum } = this.props;
		return(
			<div className='AdminHome'>
			  <AdminLayout>
			    首页
				<Row gutter={16}>
				  <Col span={8}>
				    <Card title="用户数" bordered={false}>
				      {usernum}
				    </Card>
				  </Col>
				  <Col span={8}>
				    <Card title="商品数" bordered={false}>
				      {ordernum}
				    </Card>
				  </Col>
				  <Col span={8}>
				    <Card title="订单数" bordered={false}>
				      {productnum}
				    </Card>
				  </Col>
				</Row>
				</AdminLayout>
			</div>
		)
	}
}

//将属性映射到组件中
const mapStateToProps = (state)=>{
	// console.log(state);
	return {
		usernum:state.get('home').get('usernum'),
		ordernum:state.get('home').get('ordernum'),
		productnum:state.get('home').get('productnum'),
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handleCounts:()=>{
			// 调用派发action的方法
			dispatch(actionCreator.getCountsAction());
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminHome);