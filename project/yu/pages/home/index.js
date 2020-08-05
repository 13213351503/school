import React,{ Component,Fragment} from 'react'
import { Layout, Menu, Breadcrumb, Icon ,Card, Col, Row,Input,Button,List} from 'antd';

import { connect } from 'react-redux' 

import { actionCreators }  from './store/index.js'

import axios from 'axios'




import AdminLayout from 'common/layout/index.js'

//调用this必须用constructor
class home extends Component {
    componentDidMount(){
        //发送请求获取统计数据
        this.props.handleCount();
    }
 //生命周期函数
    render(){
        const { usernum,productnum,ordernum } = this.props
        return (
                <div className = 'home' >
                   <AdminLayout >
                    <Breadcrumb style={{ margin: '16px 0'}}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className = 'content' style={{ background: '#ECECEC', padding: '30px' }}>
                      <Row gutter={16}>
                        <Col span={8}>
                          <Card title="用户数量" bordered={false}>
                            {usernum}
                          </Card>
                        </Col>
                        <Col span={8}>
                          <Card title="订单数量" bordered={false}>
                            {ordernum}
                          </Card>
                        </Col>
                        <Col span={8}>
                          <Card title="商品数量" bordered={false}>
                            {productnum}
                          </Card>
                        </Col>
                      </Row>
                    </div>
                   </AdminLayout>
                </div>
            )
        }
}




//将数据,属性从store映射到组件
const mapStateToProps = (state /*, ownProps*/) => {
  return {
        usernum:state.get('home').get('usernum'),
        ordernum:state.get('home').get('ordernum'),
        productnum:state.get('home').get('productnum')
    }
}

//将数据,方法从store映射到组件
const mapDispatchToProps = (dispatch /*, ownProps*/) => {
  return {
        handleCount:()=>{
            dispatch(actionCreators.getCountsAction())
        }
    }
}
export default connect( mapStateToProps, mapDispatchToProps)(home)