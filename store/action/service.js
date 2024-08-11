// import { GET } from "@/utils/axios";
import * as types from "../actionTypes";

export const ServiceList = (data) => {
    return {
        type: types.GET_SERVICE_LIST,
        payload: data,
    };
};

export const ServiceListsuccess = () => {
    return async (dispatch) => {
        try {
            const response = await GET(`/api/services`);
            const resJson = response.data;
            if (response) {
                dispatch(ServiceList(resJson));
            }
            if (response.status === 400) {
            }
        } catch (error) {
            console.log('err', error);
        }
    };
};
