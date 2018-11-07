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
     },
     userInfo: (type, bool) => {
        return {
            type,
            bool
        };
     }
 };

const initialState = {
    userId: null,
    userName: null,
    userPw: null,
    userEmail: null,
    headerVisible: true,
    footerVisible: false,
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
        case 'USERINFO':
            return Object.assign({}, state, {
                userId: action.bool.userId,
                userName: action.bool.userName,
                userPw: action.bool.userPw,
                userEmail: action.bool.userEmail
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