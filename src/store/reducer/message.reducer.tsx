/* eslint-disable prettier/prettier */
import { actionTypes } from '../action/message.action';

const initialState = {
    messages: [
        {
            id: '',
            messages: [
                {
                    text: '',
                    user_id: '',
                    to_id: '',
                },
            ],
            room_id: '',
            user: '',
            user_id: '',
        },
    ],
};

export const MessageReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {

    case actionTypes.CONNECT:
        return {
            ...state,
            messages: payload,
        };
    case actionTypes.RECEIVE:
        const filtered = initialState.messages.filter((item: any) => {
            return item.room_id !== payload.room_id;
        });
        return {
            ...state,
            receive: [...filtered, payload],
        };

    default:
        return state;
    }
};
