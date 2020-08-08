import React,{Component} from 'react'
import { connect } from 'react-redux'
import './index.css'
import {  Breadcrumb, Form, Select, Input, Button, InputNumber } from 'antd';
import UploadImages from 'common/upload-images/index.js';
import {UPLOAD_IMAGES,UPLOAD_DETAIL_IMAGES} from 'api/config.js';
import RichEditor from 'common/rich-editor/index.js'

import { actionCreator } from './store/index.js'
import  AdminLayout  from 'common/layout/index.js'

const { Option } = Select;

//容器组件
class ProductSave extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this); 	
	}
	componentDidMount(){
		// 加载最新商品分类
		this.props.handleLevelCategories();
	}
	handleSubmit(e){
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        // console.log('Received values of form: ', values);
	        this.props.handleAddCategiries(values)
	      }
	    });
	};
	render(){
		const { getFieldDecorator } = this.props.form;
		const {categories} = this.props;
		return(
			<div className='ProductSave'>
			  <AdminLayout>
			  	<Breadcrumb style={{ margin: '16px 0' }}>
		          <Breadcrumb.Item>首页</Breadcrumb.Item>
		          <Breadcrumb.Item>商品管理</Breadcrumb.Item>
		          <Breadcrumb.Item>新增商品</Breadcrumb.Item>
			    </Breadcrumb>
			  	<div>
			  		<Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
				        <Form.Item label="商品分类">
				          {getFieldDecorator('category', {
				            rules: [{ required: true, message: '请选择商品分类!!' }],
				          })(
				            <Select
				              placeholder="商品分类!!"
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
				            rules: [{ required: true, message: '请填写商品名称!!' }],
				          })(<Input />)}
				        </Form.Item>
				        <Form.Item label="商品描述">
				          {getFieldDecorator('description', {
				            rules: [{ required: true, message: '请填写商品描述!!' }],
				          })(<Input />)}
				        </Form.Item>
				         <Form.Item label="商品价格">
				          {getFieldDecorator('price', {
				            rules: [{ required: true, message: '请填写商品价格!!' }],
				          })(<InputNumber />)}
				        </Form.Item>
				        <Form.Item label="商品库存">
				          {getFieldDecorator('stock', {
				            rules: [{ required: true, message: '请填写商品库存!!' }],
				          })(<InputNumber />)}
				        </Form.Item>
				        <Form.Item label="封面图片">
				        	<UploadImages 
				        		action={UPLOAD_IMAGES}
				        		max={1}
				        		getFileList ={(fileList)=>{
				        			console.log(fileList);
				        		}}
				        	/>
				        </Form.Item>
				        <Form.Item label="商品图片">
				          	<UploadImages 
				        		action={UPLOAD_IMAGES}
				        		max={9}
				        		getFileList ={(fileList)=>{
				        			console.log(fileList);
				        		}}
				        	/>
				        </Form.Item>
				        <Form.Item label="商品详情">
				          	<RichEditor 
				          		url={UPLOAD_DETAIL_IMAGES}
				          	/>
				        </Form.Item>
				        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
				          <Button type="primary" onClick={this.handleSubmit}>
				            提交
				          </Button>
				        </Form.Item>
				    </Form>
			  	</div>
			  </AdminLayout>
			</div>	
		)
	}
}

const WrappedProductSave = Form.create({ name: 'coordinated' })(ProductSave);


//将属性映射到组件中
const mapStateToProps = (state)=>{
	// console.log(state)
	return {
		categories:state.get('product').get('categories')
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handleAddCategiries:(values)=>{
			dispatch(actionCreator.getAddCategoriesAction(values))
		},
		handleLevelCategories:()=>{
			dispatch(actionCreator.getLevelCategoriesAction())
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(WrappedProductSave)