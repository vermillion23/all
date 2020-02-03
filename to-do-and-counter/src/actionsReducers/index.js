import {combineReducers, createStore} from "redux";
import count from './store';
import todo from './todoStore';

const todoApp = combineReducers( {
    count,
    todo
});

export default createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());