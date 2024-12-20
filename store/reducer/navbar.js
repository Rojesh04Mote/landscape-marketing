import * as types from '../actionTypes';

const initialState = {
    navbarheight: 130,
}

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_NAVBARHEIGHT:
            return { ...state, navbarheight: action.payload };

        default:
            return state;

    }
}
export default navbarReducer;