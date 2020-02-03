import React, { Component } from 'react';
import * as todoActions from '../actionsReducers/todoStore';
import {connect} from 'react-redux';

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

    // addItem1 = (item) => {
    //     console.log('item')
    // }

    // onTextChange = () => {
    //     console.log('hit');
    // }

    // handleChange(event) {
    //     console.log('ioj')
    // }

    render() {
        const {createItem, addItem, text} = this.props;


        return (
            <div>
                {/*<input type="text"*/}
                {/*    // onChange={this.onLabelChange}*/}
                {/*       placeholder="Add new"*/}

                {/*/>*/}

                {/*<li value={createItem}></li>*/}
                <input type="text"
                       placeholder="Add new"
                       // onChange={handleChange}
                />
                <button onClick={() => addItem('hi')}> Add </button>
               <br/> <input value={createItem}
                            />

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
     addItem: (item) => todoActions.addTodo(item),
 };

/*const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(todoActions.addTodo(item))
    }
}*/

export default connect(mapStateToProps, mapDispatchToProps)(TodoListIt);