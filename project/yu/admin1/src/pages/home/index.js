/*
* @Author: Chen
* @Date:   2019-12-03 17:36:42
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-10 18:14:15
*/
import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './index.css'
import { Breadcrumb,Card,Row, Col    } from 'antd'

import {actionCreator} from './store/index.js'
import Layout from 'common/layout'


//容器组件
class Home extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		this.props.handleCount()
	}
	render(){
		const { usernum,ordernum,productnum } = this.props
		return(
			<div className='Home'>
				<Layout>
					<Breadcrumb style={{ margin: '16px 0' }}>
			          <Breadcrumb.Item>首页</Breadcrumb.Item>
			        </Breadcrumb>
			        <div className='content'>
			        	<Row>
			        		<Col span={8}>
					        	<Card title="用户统计" bordered={true} style={{ width: 300 }}>
							      <p>{usernum}</p>
							    </Card>
						    </Col>
						    <Col span={8}>
							    <Card title="订单量" bordered={true} style={{ width: 300 }}>
							      <p>{ordernum}</p>
							    </Card>
					      	</Col>
					      	<Col span={8}>
							    <Card title="商品数量" bordered={true} style={{ width: 300 }}>
							      <p>{productnum}</p>
							    </Card>
							</Col>
					    </Row>
			        </div>
				</Layout>
			</div>	
		)
	}
}




//将属性映射到组件中
const mapStateToProps = (state)=>{
	return {
		usernum:state.get('home').get('usernum'),
		ordernum:state.get('home').get('ordernum'),
		productnum:state.get('home').get('productnum'),
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handleCount:()=>{
			dispatch(actionCreator.getCountAction())
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)