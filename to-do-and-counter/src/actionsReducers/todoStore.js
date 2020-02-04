// const initialState = {
    // todos: [
    //     {id: 1, value: 'Buy Milk'},
    //     {id: 2, value: 'Close door'},
    // ]
// };

// todos: [
//     {id: 1, value: 'Buy Milk'},
//     {id: 2, value: 'Close door'},
// ]
// функция которая всегда принимает 2 параметра, текущее состояние state, и action = {type: '', payload: }

// export default function createItem(state  = '', action = {}) {
//     switch (action.type) {
//         case 'todo/ADD_ITEM':
//             return action.item;
//         case 'todo/CHANGE':
//             return action.item;
//         default:
//             return state
//     }
// }

const initialState = {
    data: [],
    inputValue: '',
};

export default function createItem(state  = initialState, action = {}) {
    switch (action.type) {
        case 'todo/ADD_ITEM':
            return {
                ...state,
                data: [...state.data, action.item],
                inputValue: ''
            };
        case 'todo/CHANGE_INPUT_VALUE':
            return {
                ...state,
                inputValue: action.inputValue
            };
        default:
            return state
    }
}

export const addTodo = (item) => ({type: 'todo/ADD_ITEM', item });
export const changeInputValue = (inputValue) => ({type: 'todo/CHANGE_INPUT_VALUE', inputValue });

// export

// export default function createItem(state  = [], action = {}) {
//
//
//     switch (action.type) {
//         case 'ADDITEM':
//            return [
//                ...state,
//                {
//                    id: action.id,
//                    text: action.text
//                }
//            ]
//         default:
//             return state
//     }
// }
// let nextTodoID = 0;
//
// export const addTodo = text => ({
//     type: 'ADDITEM',
//     id: nextTodoID++,
//     text
// })
// // export const add = () => {
//
//     return {
//         type: 'ADDITEM',
//         payload: Math.floor(Math.random() * 10)
//     };
// };
// export const add = () => ({type: 'ADDITEM'});

