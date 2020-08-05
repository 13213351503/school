import React,{ Component,Fragment} from 'react'
import {  Input,Button,List} from 'antd';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import { connect } from 'react-redux' 

import { actionCreators }  from './store/index.js'

import axios from 'axios'




import AdminLayout from 'common/layout/index.js'

//调用this必须用constructor
class User extends Component {
    
 //生命周期函数
    render(){
        return (
                <div className = 'User' >
                   <AdminLayout >
                    <Breadcrumb style={{ margin: '16px 0'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    dsadsad
                   </AdminLayout>
                </div>
            )
        }
}




//将数据,属性从store映射到组件
const mapStateToProps = (state /*, ownProps*/) => {
  return {
 

  }
}

//将数据,方法从store映射到组件
const mapDispatchToProps = (dispatch /*, ownProps*/) => {
  return {
       
    }
}
export default connect( mapStateToProps, mapDispatchToProps)(User)