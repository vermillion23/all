import { combineReducers } from "redux";
import store from './store';
import todoStore from './todoStore';

const todoApp = combineReducers( {
    store,
    todoStore
})

export default todoApp