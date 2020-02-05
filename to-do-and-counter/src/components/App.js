import React, {Component} from 'react';
import Counter from './Counter';
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
                    <TodoListIt />
            </div>

        );
    }
}

export default (App)