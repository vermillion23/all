import React, {Component} from 'react';
import Counter from './Counter';
import {Provider} from "react-redux";
import store from "../actionsReducers";
import TodoList from './TodoList';
import TodoListIt from './TodoListIt';

class App extends Component {
        // state = {
        //     todos: [
        //         {id: 1, value: 'Buy Milk'},
        //         {id: 2, value: 'Close door'},
        //     ]
        // };
    render() {
        return (
            <div>


                <Counter />
                <TodoList />
                    <TodoListIt />
            </div>

        );
    }
}

export default (App)