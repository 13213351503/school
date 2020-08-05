/*
* @Author: Chen
* @Date:   2019-12-08 16:25:02
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-08 17:43:27
*/
import React,{Component} from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const {  Content } = Layout;
import Header from 'common/header'
import Sider from 'common/sider'

class AdminLayout extends Component{
	render(){
		return (
			<div className='AdminLayout'>
				<Layout>
					<Header />
				    <Layout>
				      <Sider />
				      <Layout style={{ padding: '0 24px 24px' }}>
				        <Content
				          style={{
				            background: '#fff',
				            padding: 24,
				            margin: 0,
				            minHeight: 280,
				          }}
				        >
				         {this.props.children}
				        </Content>
				      </Layout>
				    </Layout>
				</Layout>
			</div>
		)
	}
}

export default AdminLayout