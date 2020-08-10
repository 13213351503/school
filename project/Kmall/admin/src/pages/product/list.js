import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './index.css'
import { Divider,Switch, Icon,InputNumber, Breadcrumb, Table,  Tag,Button,Input } from 'antd';
import moment from 'moment';

import { actionCreator } from './store/index.js'
import  AdminLayout  from 'common/layout/index.js'
import {
  Link,
} from "react-router-dom";
const { Search } = Input;

//容器组件
class ProductList extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		this.props.handlePage(1)
	}
	render(){
		const columns = [
		  {
		    title: '商品名称',
		    dataIndex: 'name',
		    key: 'name',
		    render:(name)=>{
		    	if(keyword){
		    		let reg = new RegExp(keyword,'ig');
		    		let newName = name.replace(reg,'<b style="color:green">'+keyword+'</b>');
		    		return <div dangerouslySetInnerHTML={{__html:newName}}></div>
		    	}else{
		    		return name
		    	}
		    }
		  },
		  {
		    title: '是否首页显示',
		    dataIndex: 'isShow',
		    key: 'isShow',
		    render:(isShow,record)=>{
		    	return(
		    		<Switch 
		    		checkedChildren="是" 
		    		unCheckedChildren="否" 
		    		defaultChecked ={isShow == '0' ? false : true}
		    		onChange={(checked)=>{
		    			const isShow = checked ? '1' : '0'
		    			handeleUpdateIsShow(record._id,isShow)
		    		}}
		    		/>
		    	)
		    }
		  },
		  {
		    title: '上架/下架',
		    dataIndex: 'status',
		    key: 'status',
		    render:(status,record)=>{
		    	return(
		    		<Switch 
		    		checkedChildren="上架" 
		    		unCheckedChildren="下架" 
		    		defaultChecked ={status == '0' ? false : true}
		    		onChange={(checked)=>{
		    			const status = checked ? '1' : '0'
		    			handeleUpdateStatus(record._id,status)
		    		}}
		    		/>
		    	)
		    }
		  },
		  {
		    title: '是否热卖',
		    dataIndex: 'isHot',
		    key: 'isHot',
		    render:(isHot,record)=>{
		    	return(
		    		<Switch 
		    		checkedChildren="是" 
		    		unCheckedChildren="否" 
		    		defaultChecked ={isHot == '0' ? false : true}
		    		onChange={(checked)=>{
		    			const isHot = checked ? '1' : '0'
		    			handeleUpdateIsHot(record._id,isHot)
		    		}}
		    		/>
		    	)
		    }
		  },
		  {
		    title: '排序',
		    key: 'order',
		    dataIndex: 'order',
		    render: (order,record) =>{
		    	return (
		    		<InputNumber
		    			defaultValue={order}
		    			onBlur={(ev)=>{
		    				if(order !=ev.target.value){
		    					handeleUpdateOrder(record._id,ev.target.value)
		    				}
		    			}}
		    		/>
		    	)
		    } 
		  },
		  {
		  	title:'操作',
		  	render:(name,record)=>{
		  		return(
		  			<span>
		  				<Link to={'/product/save/'+record._id}>编辑</Link>
		  				<Divider type='vertical' />
		  				<Link to={'/product/detail/'+record._id}>详情</Link>
		  			</span>
		  		)
		  	}
		  }
		  
		];
		const { list,
				total,
				pageSize,
				current,
				handlePage,
				isFetching,
				keyword,

				handeleUpdateIsShow,
				handeleUpdateStatus,
				handeleUpdateIsHot,
				handeleUpdateOrder,
			 } = this.props;
		const dataSource = list.toJS()
		return(
			<div className='ProductList'>
			  <AdminLayout>
			  	<Breadcrumb style={{ margin: '16px 0' }}>
		          <Breadcrumb.Item>首页</Breadcrumb.Item>
		          <Breadcrumb.Item>商品管理</Breadcrumb.Item>
		          <Breadcrumb.Item>商品列表</Breadcrumb.Item>
		          <div className='btn'>
		          	<Search
		          		style={{width:400}} 
			          	placeholder="请输入关键词" 
			          	onSearch={
			          		(value) => {
			          			handlePage(1,value)
			          		}
			          	} 
			          	enterButton 
		          	/>
		          	<Link to='/product/save'><Button type="primary" className='btn-add'>新增商品</Button></Link>
		          </div>
			    </Breadcrumb>
			  	<div>
			  		<Table 
			  			columns={columns} 
			  			dataSource={dataSource} 
			  			rowKey='_id'
			  			loading={isFetching}
			  			pagination={{
			  				total:total,
			  				pageSize:pageSize,
			  				current:current
			  			}}
			  			onChange={(page)=>{
			  				//page.current当前页
			  				if(keyword){
			  					handlePage(page.current,keyword);
			  				}else{
			  					handlePage(page.current);
			  				}
			  			}}
			  		/>
			  	</div>
			  </AdminLayout>
			</div>	
		)
	}
}




//将属性映射到组件中
const mapStateToProps = (state)=>{
	// console.log(state)
	return {
		list:state.get('product').get('list'),
		total:state.get('product').get('total'),
		pageSize:state.get('product').get('pageSize'),
		current:state.get('product').get('current'),
		keyword:state.get('product').get('keyword'),
		isFetching:state.get('product').get('isFetching'),
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handlePage:(page,keyword)=>{
			dispatch(actionCreator.getPageAction(page,keyword))
		},
		
		handeleUpdateIsShow:(id,newIsShow)=>{
			dispatch(actionCreator.getUpdateIsShow(id,newIsShow))
		},
		handeleUpdateStatus:(id,newStatus)=>{
			dispatch(actionCreator.getUpdateStatus(id,newStatus))
		},
		handeleUpdateIsHot:(id,newIsHot)=>{
			dispatch(actionCreator.getUpdateIsHot(id,newIsHot))
		},
		handeleUpdateOrder:(id,newOrder)=>{
			dispatch(actionCreator.getUpdateOrder(id,newOrder))
		}
	}
}




export default connect(mapStateToProps,mapDispatchToProps)(ProductList)