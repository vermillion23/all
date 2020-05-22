import React, {Component} from 'react';


export default class App extends Component {

    getResource = async (url) => {
        const res = await fetch('https://swapi.co/api/people/1');
        const body = await res.json();
        return (
            console.log(body)
        )
    };

    render() {
        return (
            <div>

                <br/>
                <button onClick={this.getResource}>
                    Get Luke
                </button>



            </div>

        )
    }
}
