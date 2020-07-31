//专门用来合并reducer函数
import { combineReducers } from 'redux';
import { reducer } from '../pages/ToDoList/store/index.js';
// import { home } from '../pages/home/index.js';



export default  combineReducers({
	TodoList:reducer
})