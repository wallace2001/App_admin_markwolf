/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthRouter} from './stackRouter';

export const Router = () => {
    return(
        <NavigationContainer>
            <AuthRouter />
        </NavigationContainer>
    );
}