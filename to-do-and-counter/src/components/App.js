import React, {Component} from 'react';
import Counter from './Counter';
import TodoListIt from './TodoListIt';
import Form from './Form';

class App extends Component {

    render() {

        const {inputValue, emailValue} = this.props;

        return (
            <div>


                <Form/>
                <Counter />
                    <TodoListIt />
            </div>

        );
    }
}

export default (App)