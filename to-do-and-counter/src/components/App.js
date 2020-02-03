import React, {Component} from 'react';
import Counter from './Counter';
import {Provider, connect} from "react-redux";
import {createStore} from "redux";
import countState from "../actionsReducers/store";
import TodoList from './TodoList';
import createItem from '../todoStore';
import TodoListIt from './TodoListIt';


// const store = createStore(countState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const todoStore = createStore(createItem);

    function App() {
  return (
    <div>

        <Provider store={todoStore}>
        <Counter />
        <TodoList />
            <TodoListIt />
        </Provider>
    </div>
  );
}

export default App;
