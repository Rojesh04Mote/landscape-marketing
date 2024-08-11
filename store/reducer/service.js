import * as types from '../actionTypes';

const initialState = {
    servicelist: []
}

const serviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_SERVICE_LIST:
            return { ...state, servicelist: action.payload };

        default:
            return state;

    }
}
export default serviceReducer;