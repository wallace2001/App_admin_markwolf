/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {RectButton} from 'react-native-gesture-handler';
import { authorization } from '../../store/action/auth.action';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {person, error} = useSelector((state: RootStateOrAny) => state.AuthReducer);
    const {open} = useSelector((state: RootStateOrAny) => state.LoadingReducer);

    const handleClickLogin = async() => {
        const data = {
            email,
            password,
        };
        await dispatch(authorization(data));
        if (person?.ok){
            navigation.navigate('Chat');
        }
    };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.content}>
            <View style={error ? styles.error : {display: 'none'}}>
                <Icon name="exclamation-triangle" size={25} color="#ff0000" />
                <Text style={styles.textError}>{error === 'Token invalid' ? 'Olá, é preciso logar-se denovo.' : error}</Text>
            </View>
            <View style={styles.contentInput}>
                <Text style={styles.textInput}>E-mail</Text>
                <TextInput
                    placeholderTextColor="#ccc"
                    placeholder="Digite seu e-mail"
                    style={styles.input}
                    onChangeText={(e: any) => setEmail(e)}
                />
            </View>
            <View style={styles.contentInput}>
                <Text style={styles.textInput}>Password</Text>
                <TextInput
                    placeholderTextColor="#ccc"
                    placeholder="Digite sua senha"
                    style={styles.input}
                    onChangeText={(e: any) => setPassword(e)}
                />
            </View>
            <RectButton onPress={handleClickLogin} style={open ? styles.disabledButton : styles.button}>
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
        paddingTop: 150,
        backgroundColor: '#fff',
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
        color: '#000',
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
    disabledButton: {
        width: 150,
        height: 50,
        borderRadius: 5,
        alignSelf: 'center',
        marginVertical: 60,
        backgroundColor: '#00000053',

        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Ubuntu-Bold',
        fontWeight: 'bold',
    },
    error: {
        width: '100%',
        height: 60,
        backgroundColor: '#ff00006c',
        paddingHorizontal: 30,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    textError: {
        width: 200,
        fontSize: 20,
        color: '#fff',
        marginLeft: 20,
    },
});
