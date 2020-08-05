/*
* @Author: Chen
* @Date:   2019-12-11 19:15:30
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-16 20:05:02
*/
import React,{Component} from 'react'
import { connect } from 'react-redux'
import {actionCreator} from './store/index.js'
import { Breadcrumb,Form, Select, Input, Button,InputNumber } from 'antd'

const { Option } = Select
import './index.css'
import Layout from 'common/layout'
import UploadImage from 'common/upload-image'
import RichEditor from 'common/rich-editor'

import {UPLOAD_PRODUCT_IMAGE,UPLOAD_PRODUCT_DETAIL_IMAGE} from 'api/config.js'

class ProdutDetail extends Component{
	constructor(props){
		super(props)
		this.state = {
			productId:this.props.match.params.productId
		}
	}
	componentDidMount(){
		//如果是查看商品则需要获取商品详情信息并数据回填
		if(this.state.productId){
			this.props.handleProductDetail(this.state.productId)
		}
	}
	render(){
		const { 
			//商品详情信息
			categoryName,
			name,
			description,
			price,
			stock,
			mainImage,
			images,
			detail,
		} = this.props
		let imageBox = []
		if(images){
			imageBox = images.split(',').map((url,index)=>{
				return <li key={index}><img src={url} /></li>
			})
		}
		return (
			<div className='ProdutDetail'>
				<Layout>
					<Breadcrumb style={{ margin: '16px 0' }}>
			          <Breadcrumb.Item>首页</Breadcrumb.Item>
			          <Breadcrumb.Item>商品管理</Breadcrumb.Item>
			          <Breadcrumb.Item>查看商品</Breadcrumb.Item>
			        </Breadcrumb>
			        <div className='content'>	
			        	<Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
					        <Form.Item label="商品分类">
					          <Input value={categoryName} disabled={true} />
					        </Form.Item>
					        <Form.Item label="商品名称">
					          <Input value={name} disabled={true} />
					        </Form.Item>
					        <Form.Item label="商品描述">
					          <Input value={description} disabled={true} />
					        </Form.Item>
					        <Form.Item label="商品价格">
					          <InputNumber value={price} disabled={true} min={0} />
					        </Form.Item>
					        <Form.Item label="商品库存">
					          <InputNumber value={stock} disabled={true} min={0} />
					        </Form.Item>
					        <Form.Item 
					        	label="封面图片"
					        >
					          {mainImage ? <ul className='imageBox'><li><img src={mainImage} /></li></ul> : null}	
					        </Form.Item>
					        <Form.Item 
					        	label="商品图片"
					        >
					          <ul className='imageBox'>{imageBox}</ul>
					        </Form.Item>
					        <Form.Item label="商品详情">
					          	<div dangerouslySetInnerHTML={{__html: detail}}></div>
					        </Form.Item>
					    </Form>
			        </div>
				</Layout>
			</div>
		)
	}
}
const WrappedProdutDetail = Form.create({ name: 'coordinated' })(ProdutDetail)
//将属性映射到组件中
const mapStateToProps = (state)=>{
	return {
		//获取商品详情信息
		categoryName:state.get('product').get('categoryName'),
		name:state.get('product').get('name'),
		description:state.get('product').get('description'),
		price:state.get('product').get('price'),
		stock:state.get('product').get('stock'),
		mainImage:state.get('product').get('mainImage'),
		images:state.get('product').get('images'),
		detail:state.get('product').get('detail'),
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handleProductDetail:(id)=>{
			dispatch(actionCreator.getProductDetailAction(id))
		}
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(WrappedProdutDetail)