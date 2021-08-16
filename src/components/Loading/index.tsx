/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import { RootStateOrAny, useSelector } from 'react-redux';

export const Loading = () => {

    const {open} = useSelector((state: RootStateOrAny) => state.LoadingReducer);

    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={open ? styles.container : {display: 'none'}}>
            <ActivityIndicator color="#000" size="large" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
