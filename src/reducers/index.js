import { createStore } from 'redux';
/*
 * Reducer
 */

 const action = {
     change: (type, bool) => {
        return {
            type,
            bool
        };
     }
 };

const initialState = {
    headerVisible: true,
    footerVisible: false,
    pageName: 'main',
    windowHeight: 0
};

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        // case 'INCREMENT':
        //     return Object.assign({}, state, {
        //         value: state.value + action.addBy
        //     });
        case 'WINDOWHEIGHT':
            return Object.assign({}, state, {
                windowHeight: action.bool
            });
        case 'CHANGEHEADER':
            return Object.assign({}, state, {
                headerVisible: action.bool
            });
        case 'CHANGEFOOTER':
            return Object.assign({}, state, {
                footerVisible: action.bool
            });
        default:
            return state;
    }
}

/*
 * Store
 */
const store = createStore(counterReducer);

export {store, action};