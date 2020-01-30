import {createStore, CreateStore} from 'redux';

// функция которая всегда принимает 2 параметра, текущее состояние state, и action = {type: '', payload: }
export default function countState(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

// экшены.
export const increment = () => ({type: 'INCREMENT'});
export const decrement = () => ({type: 'DECREMENT'});

// const store = createStore(countState)


// store.subscribe(() => console.log(store.getState()))
//
// store.dispatch ({ type: 'INCREMENT' })
//
// store.dispatch ( {type: 'INCREMENT' })
//
// store.dispatch ({ type: 'DECREMENT' })
