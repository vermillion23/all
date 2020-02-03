import {createStore, CreateStore} from 'redux';

export default function createItem(state = 0, action) {
    switch (action.type) {
        case 'ADDITEM':
            return state + 2;
        default:
            return state
    }
}

export const add = () => ({type: 'ADDITEM'});