/* eslint-disable prettier/prettier */
import { AppDispatch } from '..';
import { Http, HttpAuth } from '../../config/connection';
import { changeLoading } from './loading.action';

export const actionTypes = {
    CONNECT: 'CONNECT_CHAT',
    RECEIVE: 'RECEIVE_MESSAGE',
};

export const connect = (payload: any) => ({
    type: actionTypes.CONNECT,
    payload,
});

export const send = (payload: any) => ({
    type: actionTypes.RECEIVE,
    payload,
});

export const findMessage = () => (dispatch: AppDispatch) => {
    dispatch(changeLoading({
        open: true,
    }));

    HttpAuth.get('message').then(res => {
        dispatch(changeLoading({
            open: false,
        }));
        if (!res.data.error) {
            console.log(res.data);
            dispatch(connect(res.data));
        }
    });
};

export const sendMessage = (data: any) => () => {
    Http.post('send_message', data);
};

export const updatedMessage = (data: any) => (dispatch: AppDispatch) => {
    dispatch(send(data));
};

export const viewerMessage = (id: string) => () => {
    Http.post('updated', {
        id,
    }).then(res => {
        console.log(res);
    });
};

export const updated = (data: any) => (dispatch: AppDispatch) => {
    dispatch(connect(data));
};

export const finishConnection = (id: string) => (dispatch: AppDispatch) => {
    dispatch(changeLoading({open: true}));
    HttpAuth.delete(`delete_connection/${id}`).then(res => {
        console.log(res.data);
        dispatch(changeLoading({open: false}));
    });
};
