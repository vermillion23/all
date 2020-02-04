import React, { Component } from 'react';
import * as todoActions from '../actionsReducers/todoStore';
import {connect} from 'react-redux';

class TodoListIt extends Component {

    state = {
        value: ''
    };

    onLabelChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({value: e.target.value})
    };

    // onClick = () => {
    //     const {addItem} = this.props;
    //     addItem(this.state.value)
    // }

    // addItem = (item) => {
    //     console.log('item')
    // }

    // onTextChange = () => {
    //     console.log('hit');
    // }

    handleChange = (e) => {
        const {changeInputValue} = this.props;
        changeInputValue(e.target.value)
    };

    addItem = (e) => {
        const {addItem, inputValue} = this.props;
        console.log(this.props)
        addItem(inputValue);
    };

    render() {
        const {inputValue, todos} = this.props;


        return (
            <div>
                {/*<input type="text"*/}
                {/*    // onChange={this.onLabelChange}*/}
                {/*       placeholder="Add new"*/}

                {/*/>*/}

                {/*<li value={createItem}></li>*/}
                <input type="text"
                       placeholder="Add new"
                       value={inputValue}
                       onChange={this.handleChange}
                />
                <button onClick={this.addItem}> Add </button>
                {/*<button onClick={this.addItem('hi')}> Add </button>*/}

               <ul>
                   {todos.map((todo, index) => <li key={index}>{todo}</li>)}
               </ul>

            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo.data,
        inputValue: state.todo.inputValue,
    }
}

 const mapDispatchToProps = {
     addItem: todoActions.addTodo,
     changeInputValue: todoActions.changeInputValue,

 };

// the function above or:
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addItem: (item) => dispatch(todoActions.addTodo(item))
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(TodoListIt);