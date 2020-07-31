/*
* @Author: Chen
* @Date:   2019-12-03 17:36:42
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-06 15:11:45
*/
import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './index.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {actionCreator} from './store/index.js'


//容器组件
class NormalLoginForm extends React.Component {
	constructor(props){
		super(props);
	}
	  handleSubmit(e){
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values);
	      }
	    });
	  };

	  render() {
	    const { getFieldDecorator } = this.props.form;
	    return (
	    <div className="Login">
	      <Form onSubmit={this.handleSubmit} className="login-form">
	        <Form.Item>
	          {getFieldDecorator('username', {
	            rules: [{ required: true, message: 'Please input your username!' }],
	          })(
	            <Input
	              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
	              placeholder="用户名"
	            />,
	          )}
	        </Form.Item>
	        <Form.Item>
	          {getFieldDecorator('password', {
	            rules: [{ required: true, message: 'Please input your Password!' }],
	          })(
	            <Input
	              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
	              type="password"
	              placeholder="密码"
	            />,
	          )}
	        </Form.Item>
	        <Form.Item>
	          <Button type="primary" htmlType="submit" className="login-form-button btn-sub-login">
	            登录
	          </Button>
	        </Form.Item>
	      </Form>
	     </div>
	    );
	  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);




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


export default connect(mapStateToProps,mapDispatchToProps)(WrappedNormalLoginForm)