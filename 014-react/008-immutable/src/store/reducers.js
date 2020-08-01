//专门用来合并reducer函数
import { combineReducers } from 'redux';
import { reducer as TodolistReducer } from '../pages/ToDoList/store/index.js';



export default  combineReducers({
	TodoList:TodolistReducer,
})