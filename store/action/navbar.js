import * as types from '../actionTypes';

export const navbarheight = data => {
    return {
        type: types.SET_NAVBARHEIGHT,
        payload: data,
    };
};