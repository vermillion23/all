import React, {useState} from "react";
import {changeInputValue} from "../actionsReducers/todoStore";

//1. Добавить кнопку.
//2. Смена названия кнопки edit на save.
//3. Смена li на input.
//4. Менять значение isEdit при нажатии на кнопку.

export const TodoListItem = (props) => {
    const {deleteItem, id, value, editItem} = props;

    const [isEdit, isEditChange] = useState(false);

    // {items.map((item) => item.id === id ? {...item, value}: value)

    // {items.map((item) =>
    //     <TodoListItem key={item.id} {...items} isEditItem={onInputChange}/>)
    // }

    const onInputChange = (e) =>  {
        const {id} = props;
        editItem(id, e.target.value);
    }

    function onEditClick() {

        isEditChange(!isEdit)


    }

    const onDeleteClick = () => {
        deleteItem(id);
    };

    const buttonLabel = isEdit ? "Save" : "Edit";
    const renderComponent = isEdit ? <input value={value} onChange={onInputChange}/> : value;

    return (<li>


        {renderComponent}

        <button onClick={onDeleteClick}>
            Delete
        </button>

        <button onClick={onEditClick}>
            {buttonLabel}
        </button>


    </li>)
}
