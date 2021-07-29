/* eslint-disable prettier/prettier */
import { actionTypes } from '../action/auth.action';

const initialState = {
    person: {
        ok : false,
        id: '',
        name: '',
        email: '',
    },
    error: '',
};

export const AuthReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {

    case actionTypes.AUTH:
        return {
            ...state,
            person: payload,
        };
    case actionTypes.ERROR:
        return {
            ...state,
            error: payload,
        };

    default:
        return state;
    }
};
