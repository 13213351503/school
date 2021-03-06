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
		console.log('constructor(props)');
	};
	//多用于如果props有变化,需要更新state的场景,该方法返回state的更新
	static getDerivedStateFromProps(props, state){
		// console.log(props);
		// console.log(state);
		console.log('getDerivedStateFromProps(props, state)',props, state);
		return {};
	};
	//该方法返回布尔值,根据返回的布尔值决定是否执行后续的周期函数,一般用来阻止不必要的页面渲染
	shouldComponentUpdate(nextProps, nextState){
		console.log('shouldComponentUpdate(nextProps, nextState)',nextProps, nextState);	
		// if(nextState.task == 'x'){
		// 	return false
		// }else{
		// 	return true
		// }
		return true
	};
	//该方法返回一个值,这个值会随后被传入到 componentDidUpdate 中使用
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log('getSnapshotBeforeUpdate(prevProps, prevState)',prevProps, prevState);
		return {
			name:'tom',
			age:20
		}
	};
	//组件更新完成后执行
	componentDidUpdate(prevProps, prevState,snapshot){
		console.log('componentDidUpdate(prevProps, prevState,snapshot)',prevProps, prevState,snapshot);

	};
	//组件挂载完毕执行,多用于发送ajax获取数据
	componentDidMount(){
		console.log('componentDidMount');
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
		console.log('render')
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