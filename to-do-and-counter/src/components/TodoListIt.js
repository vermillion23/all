import React, { Component } from 'react';
import * as todoActions from '../actionsReducers/todoStore';
import {connect} from 'react-redux';
import {TodoListItem} from "./TodoListItemm";

class TodoList extends Component {


       handleChange = (e) => {
        const {changeInputValue} = this.props;
        changeInputValue(e.target.value)
    };

    addItem = (e) => {
        const {addItem, inputValue, nextId} = this.props;
        addItem({value: inputValue, id: nextId});
    };


    render() {
        const {inputValue, todos, deleteItem, editItem} = this.props;
        console.log(todos)

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

               <ul>
                   {todos.map((todo) =>
                       <TodoListItem
                           key={todo.id}
                           {...todo}
                           deleteItem={deleteItem}
                           editItem={editItem}
                       />)
                   }

               </ul>

            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo.data,
        inputValue: state.todo.inputValue,
        nextId: state.todo.nextId,
        id: state.todo.id,
        // value: state.todo.value,
    }
}

 const mapDispatchToProps = {
     addItem: todoActions.addTodo,
     changeInputValue: todoActions.changeInputValue,
     deleteItem: todoActions.deleteItem,
     editItem: todoActions.editItem
 };

// the function above or:
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addItem: (item) => dispatch(todoActions.addTodo(item))
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);