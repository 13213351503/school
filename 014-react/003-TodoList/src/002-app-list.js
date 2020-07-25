import React,{ Component,Fragment } from 'react';
import './app.css';
import Item from './item.js';

class App extends Component{
	//this.state 存放组件内部数据,this.props存放组件的外部数据,render负责渲染页面
	constructor(props){
		super(props),
		this.state = {
			list:['包子','油膜','胡辣汤'],
			task:''
		}
		this.handelChange = this.handelChange.bind(this)
		this.handelAdd = this.handelAdd.bind(this)
	};
	handelAdd(){
		console.log(this);
		let list = [...this.state.list];
		list.push(this.state.task);
		this.setState({
			list:list,
			task:''
		})
	};
	handelDle(index){
		let list = [...this.state.list];
		list.splice(index,1);
		this.setState({
			list:list,
			task:''
		})

	};
	handelChange(ev){
		// console.log(ev.target.value);
		// console.log(this.input);
		let val = this.input.value;
		this.setState({
			task:val
		})
	};
	getItem(){
		return this.state.list.map((item,index)=>{
			return(
				// <li key={index} onClick={this.handelDle.bind(this,index)}>{item}</li>;
				<Item 
					key={index}
					item={item}
					list= { this.state.list } 
					index={index}
					handleDelete={this.handelDle.bind(this,index)}
				/>
			)
		})
	};
	//当组件的state或者props发生改变时render函数会重新执行
	render(){
		return (
			<div className="app">
				<input ref={(input)=>{this.input = input}} className="input" onChange={this.handelChange} value={this.state.task}/>
				<button className="btn" onClick={this.handelAdd}>提交</button>
				<ul className="list">
					{
						this.getItem()
					}
				</ul>	
			</div>
		)
	};
}

export default App