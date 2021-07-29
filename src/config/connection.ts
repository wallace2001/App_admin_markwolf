/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const Http = axios.create({
    baseURL: 'http://172.18.224.1:3002/',
});

export const HttpAuth = axios.create({
    baseURL: 'http://172.18.224.1:3002/auth/',
});

HttpAuth.interceptors.request.use(
    async(config) => {
        if (await AsyncStorage.getItem('@access_token:token')){
            config.headers.authorization = `Bearer ${await AsyncStorage.getItem('@access_token:token')}`;
            return config;
        } else {
            config.headers.authorization = `Bearer ${await AsyncStorage.getItem('@access_token:token')}`;
            return config;
        }
    }
);

HttpAuth.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response){
        if (error.response.status === 401){
            AsyncStorage.removeItem('@access_token:token');
            // window.location.replace('/');
        }
    }
});