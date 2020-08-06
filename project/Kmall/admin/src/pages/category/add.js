
import React,{Component} from 'react'
import { connect } from 'react-redux'
import './index.css'
import {  Breadcrumb, Form, Select, Input, Button } from 'antd';

import { actionCreator } from './store/index.js'
import  AdminLayout  from 'common/layout/index.js'

const { Option } = Select;

//容器组件
class CategoryAdd extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this); 	
	}
	componentDidMount(){
		// this.props.handlePage(1)
	}
	handleSubmit(e){
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values);
	      }
	    });
	};
	render(){
		const { getFieldDecorator } = this.props.form;
		return(
			<div className='CategoryAdd'>
			  <AdminLayout>
			  	<Breadcrumb style={{ margin: '16px 0' }}>
		          <Breadcrumb.Item>首页</Breadcrumb.Item>
		          <Breadcrumb.Item>分类管理</Breadcrumb.Item>
		          <Breadcrumb.Item>新增分类</Breadcrumb.Item>
			    </Breadcrumb>
			  	<div>
			  		<Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
				        <Form.Item label="父级分类">
				          {getFieldDecorator('pid', {
				            rules: [{ required: true, message: '请选择父级分类!!' }],
				          })(
				            <Select
				              placeholder="父级分类!!"
				            >
				              <Option value="0">根分类</Option>
				            </Select>,
				          )}
				        </Form.Item>
				        <Form.Item label="分类名称">
				          {getFieldDecorator('name', {
				            rules: [{ required: true, message: '请选择分类名称!!' }],
				          })(<Input />)}
				        </Form.Item>
				         <Form.Item label="手机分类名称">
				          {getFieldDecorator('mobileName', {
				            rules: [{ required: true, message: '请选择手机分类名称!!' }],
				          })(<Input />)}
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

const WrappedCategoryAdd = Form.create({ name: 'coordinated' })(CategoryAdd);


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


export default connect(mapStateToProps,mapDispatchToProps)(WrappedCategoryAdd)