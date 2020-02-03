import React, {Component} from "react";
import {connect} from "react-redux";
import TodoListIt from "./TodoListIt"


export default class TodoList extends Component {

    // maxId = 100;

        // state = {
        //     todos: [
        //         {id: 1, value: 'Buy Milk'},
        //         {id: 2, value: 'Close door'},
        //         ]
        // }


    // add = (text) => {
    //             const newItem = {
    //         value: text,
    //         id: this.maxId++
    //     };

    //     this.setState(({ todos }) => {
    //         const newArr = [
    //             ... todos,
    //             newItem
    //         ];
    //
    //         return {
    //             todos: newArr
    //         };
    //     });
    //
    // };


    render() {
        // const {todos} = this.state;

        return (
            <div>
                <h1>
                    My Todo list
                </h1>

               {/*<TodoListItem addItem={this.add}/>*/}
               {/* <TodoListIt store={todoStore}/>*/}

                <ul>
                    {/*{*/}
                    {/*    todos.map(todo => <li key={todo.id}>{todo.value}</li>)*/}
                    {/*}*/}
                </ul>

            </div>
        );
    }
}