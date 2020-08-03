
import React,{Component} from 'react'
import './index.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import AdminHeader from 'common/header/index.js';
import AdminSider from 'common/sider/index.js';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

//容器组件
class AdminLayout extends Component{
	
	render(){
		return(
			<div className='AdminLayout'>
			  <Layout>
			    <AdminHeader />
			    <Layout>
			      <AdminSider />
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