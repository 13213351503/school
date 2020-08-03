
import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './index.css'
import { Breadcrumb, Icon, Row, Col, Card } from 'antd';

import {actionCreator} from './store/index.js'
import  AdminLayout  from 'common/layout/index.js'

//容器组件
class AdminHome extends Component{
	
	render(){
		return(
			<div className='AdminHome'>
			  <AdminLayout>
			  	<Breadcrumb style={{ margin: '16px 0' }}>
		          <Breadcrumb.Item>首页</Breadcrumb.Item>
			    </Breadcrumb>
			  	<div className='content'>
				  	<Row>
						<Col span={8}>
							<Card title="用户数" style={{ width: 300 }}>
								<p>100</p>
							</Card>
						</Col>
						<Col span={8}>
							<Card title="商品数" style={{ width: 300 }}>
								<p>100</p>
							</Card>
						</Col>
						<Col span={8}>
							<Card title="订单数" style={{ width: 300 }}>
								<p>100</p>
							</Card>
						</Col>
				    </Row>
			  	</div>
			  </AdminLayout>
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