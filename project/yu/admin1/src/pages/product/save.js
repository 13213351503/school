/*
* @Author: Chen
* @Date:   2019-12-11 19:15:30
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-16 19:52:23
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

class ProductSave extends Component{
	constructor(props){
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			productId:this.props.match.params.productId
		}
	}
	componentDidMount(){
		//获取最新父级分类数据
		this.props.handleLevelCategories()
		//如果是编辑商品则需要获取商品详情信息并数据回填
		if(this.state.productId){
			this.props.handleProductDetail(this.state.productId)
		}
	}
	handleSubmit(e){
    	e.preventDefault();
		this.props.form.validateFields((err,values) => {
			values.id = this.state.productId
		    this.props.handleSave(err,values)
		});
	}
	render(){
		const { getFieldDecorator } = this.props.form
		const { 
			categories,
			handleMainImage,
			handleImages,
			handleDetail,

			mainImageValidateStatus,
			mainImageHelp,
			imagesValidateStatus,
			imagesHelp,

			category,
			name,
			description,
			price,
			stock,
			mainImage,
			images,
			detail,
		} = this.props
		//封面图片数据回传
		let mainImageList = []
		if(mainImage){
			mainImageList.push({
				uid: '0',
		        name: 'image.png',
		        status: 'done',
		        url:mainImage,
		        response:{
		        	url:mainImage
		        }
			})
		}
		//商品图片数据回传
		let imagesList = []
		if(images){
			imagesList = images.split(',').map((url,index)=>{
				return {
					uid: index,
			        name: 'image.png',
			        status: 'done',
			        url:url,
			        response:{
			        	url:url
			        }
				}
			})
		}
		return (
			<div className='ProductSave'>
				<Layout>
					<Breadcrumb style={{ margin: '16px 0' }}>
			          <Breadcrumb.Item>首页</Breadcrumb.Item>
			          <Breadcrumb.Item>商品管理</Breadcrumb.Item>
			          {
			          	this.state.productId ? <Breadcrumb.Item>编辑商品</Breadcrumb.Item> : <Breadcrumb.Item>新增商品</Breadcrumb.Item>
			          }
			          
			        </Breadcrumb>
			        <div className='content'>	
			        	<Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
					        <Form.Item label="商品分类">
					          {getFieldDecorator('category', {
					            rules: [{ required: true, message: '请选择商品分类' }],
					            initialValue:category
					          })(
					            <Select
					              placeholder="请选择商品分类"
					            >
					              {
					              	categories.map((category)=>{
					              		return <Option key={category.get('_id')} value={category.get('_id')}>{category.get('name')}</Option>
					              	})
					              }
					            </Select>,
					          )}
					        </Form.Item>
					        <Form.Item label="商品名称">
					          {getFieldDecorator('name', {
					            rules: [{ required: true, message: '请输入商品名称' }],
					            initialValue:name
					          })(<Input />)}
					        </Form.Item>
					        <Form.Item label="商品描述">
					          {getFieldDecorator('description', {
					            rules: [{ required: true, message: '请输入商品描述' }],
					            initialValue:description
					          })(<Input />)}
					        </Form.Item>
					        <Form.Item label="商品价格">
					          {getFieldDecorator('price', {
					            rules: [{ required: true, message: '请输入商品价格' }],
					            initialValue:price
					          })(<InputNumber min={0} />)}
					        </Form.Item>
					        <Form.Item label="商品库存">
					          {getFieldDecorator('stock', {
					            rules: [{ required: true, message: '请输入商品库存' }],
					            initialValue:stock
					          })(<InputNumber min={0} />)}
					        </Form.Item>
					        <Form.Item 
					        	label="封面图片"
					        	required={true}
					        	validateStatus={mainImageValidateStatus}
					        	help={mainImageHelp}
					        >
					          	<UploadImage  
					          		max={1}
					          		action={UPLOAD_PRODUCT_IMAGE}
					          		getFileList = {(fileList)=>{
					          			handleMainImage(fileList)
					          		}}
					          		fileList = {mainImageList}
					          	/>
					        </Form.Item>
					        <Form.Item 
					        	label="商品图片"
					        	required={true}
					        	validateStatus={imagesValidateStatus}
					        	help={imagesHelp}
					        >
					          	<UploadImage  
					          		max={5}
					          		action={UPLOAD_PRODUCT_IMAGE}
					          		getFileList = {(fileList)=>{
					          			handleImages(fileList)
					          		}}
					          		fileList = {imagesList}
					          	/>
					        </Form.Item>
					        <Form.Item label="商品详情">
					          	<RichEditor 
					          		url={UPLOAD_PRODUCT_DETAIL_IMAGE}
					          		getValues={(values)=>{
					          			handleDetail(values)
					          		}}
					          		values={detail}
					          	/>
					        </Form.Item>
					        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
					          <Button type="primary" onClick={this.handleSubmit}>
					            提交
					          </Button>
					        </Form.Item>
					    </Form>
			        </div>
				</Layout>
			</div>
		)
	}
}
const WrappedProductSave = Form.create({ name: 'coordinated' })(ProductSave)
//将属性映射到组件中
const mapStateToProps = (state)=>{
	return {
		categories:state.get('product').get('categories'),
		mainImageValidateStatus:state.get('product').get('mainImageValidateStatus'),
		mainImageHelp:state.get('product').get('mainImageHelp'),
		imagesValidateStatus:state.get('product').get('imagesValidateStatus'),
		imagesHelp:state.get('product').get('imagesHelp'),
		//获取商品详情信息
		category:state.get('product').get('category'),
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
		handleSave:(err,values)=>{
			dispatch(actionCreator.getSaveProductAction(err,values))
		},
		handleLevelCategories:()=>{
			dispatch(actionCreator.getLevelCategoriesAction())
		},
		handleMainImage:(fileList)=>{
			dispatch(actionCreator.getMainImageAction(fileList))
		},
		handleImages:(fileList)=>{
			dispatch(actionCreator.getImagesAction(fileList))
		},
		handleDetail:(values)=>{
			dispatch(actionCreator.getDetailAction(values))
		},
		handleProductDetail:(id)=>{
			dispatch(actionCreator.getProductDetailAction(id))
		}
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(WrappedProductSave)