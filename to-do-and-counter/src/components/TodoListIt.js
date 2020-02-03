import React, { Component } from 'react';
import * as countActions from '../actionsReducers/todoStore';
import {connect} from "react-redux";

class TodoListIt extends Component {

    // state = {
    //     value: ''
    // }
    // onLabelChange = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.value);
    //     this.setState({value: e.target.value})
    // }

    // onClick = () => {
    //     const {addItem} = this.props;
    //     addItem(this.state.value)
    // }

    // addItem = () => {
    //     console.log("hi")
    // }

    render() {
        const {createItem, addItem, text} = this.props;
        let input

        return (
            <div>
                {/*<input type="text"*/}
                {/*    // onChange={this.onLabelChange}*/}
                {/*       placeholder="Add new"*/}

                {/*/>*/}

                {/*<li value={createItem}></li>*/}
                <button onClick={addItem}> Add </button>
               <br/> <input value={createItem}/>

            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        createItem: state.todo,
    }
}

const mapDispatchToProps = {
    addItem: countActions.addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListIt);