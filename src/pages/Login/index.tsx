/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { authorization } from '../../store/action/auth.action';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Login = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {person, error} = useSelector((state: RootStateOrAny) => state.AuthReducer);
    const {open} = useSelector((state: RootStateOrAny) => state.LoadingReducer);

    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async(data: any) => {
        const config = {
            email: data.email,
            password: data.password,
        };
        await dispatch(authorization(config));
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
                <Controller
                    control={control}
                    rules={{
                    required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        placeholder="Digite seu e-mail"
                        keyboardType="email-address"
                        onChangeText={onChange}
                        value={value}
                    />
                    )}
                    name="email"
                    defaultValue=""
                />
                {errors.email && <Text style={styles.wrongText}>E-mail inválido</Text>}
            </View>
            <View style={styles.contentInput}>
                <Text style={styles.textInput}>Password</Text>
                <Controller
                    control={control}
                    rules={{
                    required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        placeholder="Digite sua senha"
                        secureTextEntry={true}
                        onChangeText={onChange}
                        value={value}
                    />
                    )}
                    name="password"
                    defaultValue=""
                />
                {errors.password && <Text style={styles.wrongText}>Senha inválida</Text>}
            </View>
            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={open ? styles.disabledButton : styles.button}>
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
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
    wrongText: {
        color: '#ff0000',
        fontSize: 18,
    },
});
