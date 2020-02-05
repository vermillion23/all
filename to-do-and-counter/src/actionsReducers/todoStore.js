const initialState = {
    nextId: 0,
    data: [],
    inputValue: ''
};


export default function createItem(state = initialState, action = {}) {
    switch (action.type) {
        case 'todo/ADD_ITEM':
            return {
                ...state,
                data: [...state.data, action.item],
                inputValue: '',
                nextId: state.nextId + 1,
            };
        case 'todo/CHANGE_INPUT_VALUE':
            return {
                ...state,
                inputValue: action.inputValue
            };
        case 'todo/DELETE_ITEM':
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.id),
                // data: [...state.data.slice(0, action.id), ...state.data.slice(action.id +1)]
            };

        case 'todo/EDIT_ITEM':
            return {
                ...state,
                // data: state.data.map(() => item.id === action.id),
                data: state.data.map((item) => (item.id === action.id) ?
                    ({...item, value: action.value})
                    :
                    item
                ),
            }
        default:
            return state
    }
}

export const addTodo = (item) => ({type: 'todo/ADD_ITEM', item});
export const changeInputValue = (inputValue) => ({type: 'todo/CHANGE_INPUT_VALUE', inputValue});
export const deleteItem = (id) => ({type: 'todo/DELETE_ITEM', id});
export const editItem = (id, value) => ({type: 'todo/EDIT_ITEM', id, value});
