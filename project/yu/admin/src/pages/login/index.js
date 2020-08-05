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
		this.handleSubmit = this.handleSubmit.bind(this);
	};
	handleSubmit(e){
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				// console.log('Received values of form: ', values);
				this.props.handleLogin(values);
			};
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const { isFetching } = this.props;
		return (
			<div className="Login">
			  <Form className="login-form">
			    <Form.Item>
			      {getFieldDecorator('username', {
			        rules: [{ required: true, message: '请输入用户名!' },{ pattern:/^[a-z][a-z,0-9_]{2,5}$/i, message: '请输入首位是字母3-6位的用户名!' }],
			      })(
			        <Input
			          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
			          placeholder="用户名"
			        />,
			      )}
			    </Form.Item>
			    <Form.Item>
			      {getFieldDecorator('password', {
			        rules: [{ required: true, message: '请输入密码!' },{ pattern:/^\w{3,6}$/i, message: '请输入3-6位的密码!' }],
			      })(
			        <Input
			          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
			          type="password"
			          placeholder="密码"
			        />,
			      )}
			    </Form.Item>
			    <Form.Item>
			      <Button type="primary" className="login-form-button btn-sub-login" onClick={this.handleSubmit} loading={isFetching}>
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
			isFetching:state.get('login').get('isFetching')
		}
}

//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handleLogin:(data)=>{
			// console.log(data);
			dispatch(actionCreator.getLoginAction(data))
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(WrappedNormalLoginForm)