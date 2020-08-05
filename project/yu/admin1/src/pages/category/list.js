/*
* @Author: Chen
* @Date:   2019-12-03 17:36:42
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-12 17:35:16
*/
import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import moment from 'moment'
import './index.css'
import { Breadcrumb,Table,Button,Input,InputNumber,Switch   } from 'antd'
import {
  Link,
} from "react-router-dom"

import {actionCreator} from './store/index.js'
import Layout from 'common/layout'


//容器组件
class CategoryList extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		this.props.handlePage(1)
	}
	render(){
		const columns = [
		  {
		    title: '分类名称',
		    dataIndex: 'name',
		    key: 'name',
		    width:'40%',
		    render: (name,record)=>{
		    	return (<Input 
		    		style={{width:'60%'}}
		    		defaultValue={name}
		    		onBlur={(ev)=>{
		    			if(ev.target.value != name){
		    				// console.log(record)
		    				handleUpdateName(record._id,ev.target.value)
		    			}
		    		}}
		    	/>)
		    }
		  },
		  {
		    title: '手机分类名称',
		    dataIndex: 'mobileName',
		    key: 'mobileName',
		    width:'30%',
		    render: (mobileName,record)=>{
		    	return (<Input 
		    		style={{width:'40%'}}
		    		defaultValue={mobileName}
		    		onBlur={(ev)=>{
		    			if(ev.target.value != mobileName){
		    				handleUpdateMobileName(record._id,ev.target.value)
		    			}
		    		}}
		    	/>)
		    }
		  },
		  {
		    title: '是否显示',
		    dataIndex: 'isShow',
		    key: 'isShow',
		    render: (isShow,record)=>{
		    	return (<Switch 
		    		checkedChildren="显示" 
		    		unCheckedChildren="隐藏" 
		    		checked={isShow=='0' ? false : true}
		    		onChange={(checked)=>{
		    			// console.log(checked)
		    			const isShow = checked ? '1' : '0'
		    			handleUpdateIsShow(record._id,isShow)
		    		}} 
		    	/>)
		    }
		  },
		  {
		    title: '排序',
		    key: 'order',
		    dataIndex: 'order',
		    render: (order,record)=>{
		    	return (<InputNumber 
		    		defaultValue={order}
		    		onBlur={(ev)=>{
		    			if(ev.target.value != order){
		    				handleUpdateOrder(record._id,ev.target.value)
		    			}
		    		}}
		    	/>)
		    }
		  },
		]
		const { 
			list,
			current,
			pageSize,
			total,
			handlePage,
			isFecthing,
			handleUpdateName,
			handleUpdateMobileName,
			handleUpdateOrder,
			handleUpdateIsShow
		} = this.props
		const dataSource = list.toJS()
		// console.log(dataSource)
		return(
			<div className='CategoryList'>
				<Layout>
					<Breadcrumb style={{ margin: '16px 0' }}>
			          <Breadcrumb.Item>首页</Breadcrumb.Item>
			          <Breadcrumb.Item>分类管理</Breadcrumb.Item>
			          <Breadcrumb.Item>分类列表</Breadcrumb.Item>
			        </Breadcrumb>
			        <div className='btn'>
			        	<Link to='/category/add'><Button type="primary" className='add-btn'>新增分类</Button></Link>
			        </div>
			        <div className='content'>
			        	<Table 
							columns={columns} 
							dataSource={dataSource} 
							pagination ={{
								current:current,
								pageSize:pageSize,
								total:total
							}}
							onChange={(page)=>{
								handlePage(page.current)
							}}
							loading={{
								spinning:isFecthing,
								tip:'数据玩命加载中,请稍等'
							}}
						/>
			        </div>
				</Layout>
			</div>	
		)
	}
}




//将属性映射到组件中
const mapStateToProps = (state)=>{
	return {
		list:state.get('category').get('list'),
		pageSize:state.get('category').get('pageSize'),
		current:state.get('category').get('current'),
		total:state.get('category').get('total'),
		isFecthing:state.get('category').get('isFecthing'),
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handlePage:(page)=>{
			dispatch(actionCreator.getPageAction(page))
		},
		handleUpdateName:(id,newName)=>{
			// console.log(id,newName)
			dispatch(actionCreator.getUpdateNameAction(id,newName))
		},
		handleUpdateMobileName:(id,newMobileName)=>{
			dispatch(actionCreator.getUpdateMobileNameAction(id,newMobileName))
		},
		handleUpdateOrder:(id,newOrder)=>{
			dispatch(actionCreator.getUpdateOrderAction(id,newOrder))
		},
		handleUpdateIsShow:(id,newIsShow)=>{
			dispatch(actionCreator.getUpdateIsShowAction(id,newIsShow))
		},
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(CategoryList)