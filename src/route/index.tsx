/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRouter} from './AppRouter';
import {AuthRouter} from './AuthRouter';
import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { infoUser } from '../store/action/auth.action';

export const Router = () => {
    const dispatch = useDispatch();
    const {person} = useSelector((state: RootStateOrAny) => state.AuthReducer);

    useEffect(() => {
        dispatch(infoUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <NavigationContainer>
            {person.id ? <AuthRouter /> : <AppRouter /> }
        </NavigationContainer>
    );
}