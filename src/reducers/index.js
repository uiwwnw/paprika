import { createStore } from 'redux';
/*
 * Reducer
 */
const initialState = {
    headerVisible: true,
    style: {
        zIndex: {
            header: 100
        },
        header: {
            height: '2.5rem'
        },
        padding: '.4rem 1rem'
    }
};

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, {
                value: state.value + action.addBy
            });
        case 'DESCREMENT':
            return Object.assign({}, state, {
                value: state.value - action.addBy
            });
        case 'CHANGE':
            return Object.assign({}, state, {
                value: action.addBy
            });
        default:
            return state;
    }
}

/*
 * Store
 */
const store = createStore(counterReducer);

export default store;