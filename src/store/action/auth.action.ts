/* eslint-disable prettier/prettier */
import { AppDispatch } from '..';
import { Http, HttpAuth } from '../../config/connection';
import { changeLoading } from './loading.action';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CrendetialsProps{
    email: string;
    password: string;
}

export const actionTypes = {
    AUTH: 'AUTH_CHANGE',
    ERROR: 'AUTH_ERROR',
};

export const connect = (payload: any) => ({
    type: actionTypes.AUTH,
    payload,
});

export const error = (payload: any) => ({
    type: actionTypes.ERROR,
    payload,
});

export const authorization = (credentials: CrendetialsProps) => async(dispatch: AppDispatch) => {
    dispatch(changeLoading({open: true}));
    Http.post('login', credentials).then(res => {
        dispatch(changeLoading({open: false}));
        console.log(res);
        if (!res.data.error){
            AsyncStorage.setItem('@access_token:token', res.data.token);
            dispatch(infoUser());
        } else {
            dispatch(error(res.data.error));
        }
    });
};

export const infoUser = () => async(dispatch: AppDispatch) => {
    dispatch(changeLoading({
        open: true,
    }));
    HttpAuth.get('me').then(res => {
        dispatch(changeLoading({
            open: false,
        }));
        if (!res.data.error){
            console.log('res.data: ', res.data);
            dispatch(connect(res.data));
            dispatch(error(''));
        } else {
            dispatch(error(res.data.error));
            AsyncStorage.removeItem('@access_token:token');
            // window.location.replace("/");
            console.log('erro mano: ', res.data);
        }
    });
};
