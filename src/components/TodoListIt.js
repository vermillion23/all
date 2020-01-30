import React, { Component } from 'react';

export default class TodoListItem extends Component {

    state = {
        value: ''
    }
    onLabelChange = (e) => {
        // e.preventDefault();
        // console.log(e.target.value);
        this.setState({value: e.target.value})
    }

    onClick = () => {
        const {addItem} = this.props;
        addItem(this.state.value)
    }

    render() {
        return (
            <>
                <input type="text"
                       onChange={this.onLabelChange}
                       placeholder="Add new"

                />

                <button onClick={this.onClick}> Add </button>

            </>
        )

    }
}