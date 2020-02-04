import React from "react";
import {changeInputValue} from "../actionsReducers/todoStore";

export const TodoListItem = (props) => {
    const {deleteItem, id, value, changeInputValue, isEdit, handleChange} = props;

    function onEditClick () {
        console.log('hello')

    }

    const onDeleteClick = () => {
        deleteItem(id);
    };
    return (<li key={id}>{value} { isEdit ?
    <input value={changeInputValue} onChange={handleChange}/>: changeInputValue }

        <button onClick={onDeleteClick}>
            Delete
        </button>

        <button onClick={() =>  console.log(props)}>
            Edit
        </button>

    </li>);
};