import React, {Component} from "react";
import {connect} from "react-redux";
import TodoListIt from "./TodoListIt"
import {addTodo} from "../actionsReducers/todoStore";


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

    // onTextChange = () => {
    //     console.log('hi');
    // }

    render() {
        return (
            <div>

                {/*<TodoListIt/>*/}

            </div>
        );
    }
}