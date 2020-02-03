import React, {Component} from "react";
import * as countActions from '../actionsReducers/store';
import {connect} from "react-redux";

// Dispacther below
class Counter extends Component {
    // onClickIncr = () => {
    //     this.props.incr();
    // } для дебага
    render () {
        const {countState, incr, decr} = this.props;
        return (
            <div>
                <input readOnly value={countState}/>

                <button onClick={incr}>
                {/*    <button onClick={this.onClickIncr}> для дебага*/}
                +
                </button>

                <button onClick={decr}>
         {/**/}
                -
                </button>

            </div>
        );
    }
}

//Reducer below
const mapStateToProps = (state) => ({
    countState: state.count,
});

const mapDispatchToProps = {
    incr: countActions.increment,
    decr: countActions.decrement,
};
//
// const state = {
//     count: 0,
//     todo: {}
// };
//функция коннект принимает 2 параметра и возвращает функци, которую мы сразу вызываем и засовываем туда наш компонент. HOC high order component вызывает другой компонент в качестве аргумента
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
