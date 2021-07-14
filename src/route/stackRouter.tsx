/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Login } from '../pages/Login';
import { Chat } from '../pages/Chat';
import { Speaking } from '../pages/Speaking';

const {Screen, Navigator} = createStackNavigator();

export const AuthRouter = () => {
    return (
            <Navigator headerMode="none" screenOptions={{
                cardStyle: {
                    backgroundColor: 'transparent',
                },
            }}>
                <Screen 
                    name="login"
                    component={Login}
                />
                <Screen 
                    name="Chat"
                    component={Chat}
                />
                <Screen 
                    name="Speaking"
                    component={Speaking}
                />
            </Navigator>
    );
}