import React, {Component} from 'react';
import Counter from './Counter';
import {Provider, connect} from "react-redux";
import {createStore} from "redux";
import countState from "../actionsReducers/store";
import TodoList from './TodoList';

const store = createStore(countState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <div>

        <Provider store={store}>
        <Counter />
        <TodoList />
        </Provider>
    </div>
  );
}

export default App;
