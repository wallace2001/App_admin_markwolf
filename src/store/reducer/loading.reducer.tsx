/* eslint-disable prettier/prettier */
import { actionTypes } from '../action/loading.action';

const initialState = {
    open: false,
};

export const LoadingReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {

    case actionTypes.CHANGE:
        return { ...state, ...payload };

    default:
        return state;
    }
}
