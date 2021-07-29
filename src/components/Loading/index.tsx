/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { RootStateOrAny, useSelector } from 'react-redux';

export const Loading = () => {

    const {open} = useSelector((state: RootStateOrAny) => state.LoadingReducer);

    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={open ? styles.container : {display: 'none'}}>
            <Text style={styles.title}>Carregando...</Text>
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
    title: {
        fontSize: 23,
        fontFamily: 'Ubuntu-Bold',
    },
});
