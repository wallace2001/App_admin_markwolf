/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Login = () => {
    const navigation = useNavigation();

    const handleClickLogin = () => {
        navigation.navigate('Chat');
    };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.content}>
            <View style={styles.contentInput}>
                <Text style={styles.textInput}>E-mail</Text>
                <TextInput placeholder="Digite seu e-mail" style={styles.input}/>
            </View>
            <View style={styles.contentInput}>
                <Text style={styles.textInput}>Password</Text>
                <TextInput placeholder="Digite sua senha" style={styles.input}/>
            </View>
            <RectButton onPress={handleClickLogin} style={styles.button}>
                <Text style={styles.textButton}>Entrar</Text>
            </RectButton>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    header: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        fontFamily: 'Ubuntu-Bold',
        fontWeight: 'bold',
    },
    content: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: 60,
    },
    contentInput: {
        width: '100%',
        height: 'auto',
        marginTop: 20,
    },
    textInput: {
        fontSize: 18,
        fontFamily: 'Ubuntu-Regular',
        fontWeight: '400',
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        fontSize: 18,
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 5,
        alignSelf: 'center',
        marginVertical: 60,
        backgroundColor: '#000',

        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Ubuntu-Bold',
        fontWeight: 'bold',
    },
});
