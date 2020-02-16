import React, {Component} from 'react';

// export default class Form extends Component {
//
//     render() {
//         return (
//
//         )
//     }
// }

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>Привет, мир!</h1>
                <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}