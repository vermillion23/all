import React, { Component } from 'react';
import * as countActions from '../todoStore';
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

    render() {
        const {createItem, addItem} = this.props;
        return (
            <div>
                <input type="text"
                       // onChange={this.onLabelChange}
                       placeholder="Add new"

                />

                <button onClick={addItem}> Add </button>
                <input readOnly value={createItem}/>

            </div>
        )

    }
}

const mapStateToProps = (state) => ( {
    createItem: state,
})

const mapDispatchToProps = {
    addItem: countActions.add,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListIt);