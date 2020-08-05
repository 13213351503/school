import React,{ Component,Fragment} from 'react'

import './index.css'

import { connect } from 'react-redux' 

import { actionCreators}  from './store/index.js'


import axios from 'axios'

import { Form, Icon, Input, Button, Checkbox } from 'antd';

//调用this必须用constructor
//容器组件
class NormalLoginForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit =this.handleSubmit.bind(this)
  }
    handleSubmit(e){
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values);
          this.props.handleLogin(values)
        }
      });
    };

    render() {
      const { getFieldDecorator } = this.props.form;
      const { isFecthing } = this.props
      return (
      <div className="Login">
        <Form  className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名' },{pattern: /^[a-z][a-z0-9]{3,6}$/i, message: '请输入首位是字母的3-6位用户名' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,0.25)' }} />}
                placeholder="用户名"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' },{pattern: /^\w{3,6}$/i, message: '请输入3-6位密码' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,0.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" 
            onClick={this.handleSubmit} 
            className="login-form-button btn-sub-login"
            loading= {isFecthing}
            >
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
  return {
    isFecthing:state.get('login').get('isFecthing')
  }
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
  return {
    handleLogin:(data)=>{
      dispatch(actionCreators.getLoginAction(data))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(WrappedNormalLoginForm)