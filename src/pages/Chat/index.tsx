/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react';
import {StyleSheet, View, Text, Image, FlatList, ImageBackground, Alert} from 'react-native';
import Logo from '../../assets/logo_mark_wolf.png';
import BackgroundImage from '../../assets/little_background_frame.png';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HttpAuth } from '../../config/connection';
import socketio from 'socket.io-client';
import { findMessage, finishConnection, updated } from '../../store/action/message.action';
import { CardChat } from '../../components/CardChat';
import { useNavigation } from '@react-navigation/native';

interface MessageProps{
    text: string;
    user_id: string;
    to_id: string;
}

interface PropsChat{
    id: string;
    messages: Array<MessageProps>,
    room_id: string;
    user_id: string;
    lastMessageView: boolean;
    client_finished: boolean;
    user: string;
}

export const Chat = () => {
    const [request, setRequest] = useState<PropsChat[]>([]);

    const dispatch = useDispatch();
    const {person} = useSelector((state: RootStateOrAny) => state.AuthReducer);
    const {messages} = useSelector((state: RootStateOrAny) => state.MessageReducer);

    const navigation = useNavigation();
    const socket = useRef();

    useEffect(() => {
        console.log(person);
        console.log(JSON.stringify(AsyncStorage.getItem('@access_token:token')));
    }, [person]);

    //Receber todas as conversas ao entrar
    useEffect(() => {
        dispatch(findMessage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Conexão e recebimento das novas mensagens
    useEffect(() => {
        (socket as any).current = socketio('http://192.168.3.37:3002', {transports: ['websocket']});

        (socket as any).current.on('new.join', () => {
            HttpAuth.get('message_admin').then(res => {
                if (!res.data.error){
                    setRequest(res.data);
                    dispatch(updated(res.data));
                }
            });
        });
        (socket as any).current.on('updated.message.admin', (data: any) => {
            setRequest(data);
            dispatch(updated(data));
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Receber e atualizar as conversas
    useEffect(() => {
        (socket as any).current.on('client.send.message', () => {
        });
        (socket as any).current.on('receive.message.admin', () => {
            HttpAuth.get('message_admin').then(res => {
                if (!res.data.error){
                    setRequest(res.data);
                    dispatch(updated(res.data));
                }
            });
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Guardar as conversas
    useEffect(() => {
        setRequest(messages);
    }, [messages]);

    const handleRemove = (id: string, user: string) => {
        Alert.alert('Remover', `Deseja remover a conversa de ${user} ?`, [
            {
                text: 'Não',
                style: 'cancel',
            },
            {
                text: 'Sim',
                onPress: async() => {
                    try {
                        await dispatch(finishConnection(id));
                        navigation.navigate('Chat');
                    } catch (error) {
                        Alert.alert('Não foi possível remover.');
                    }
                },
            },
        ]);
    };

  return (
    <ImageBackground  resizeMode="cover" source={BackgroundImage} style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>Bem vindo {person.name}</Text>
            <Image source={Logo} resizeMode="contain" style={styles.image} />
        </View>

        <View style={styles.flatList}>
            <FlatList
                data={request}
                keyExtractor={({id}: any) => id}
                style={styles.flatList}
                renderItem={({item, index}: any) => (
                    <CardChat
                        handleRemove={handleRemove}
                        item={item}
                        index={index}
                        request={request}
                        key={index}
                    />
                )}
                    showsVerticalScrollIndicator={false}
            />
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        height: '100%',
        backgroundColor: '#0e0401',
    },
    header: {
        width: '100%',
        height: 120,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',

        justifyContent: 'space-between',
    },
    flatList: {
        marginTop: 0,
        paddingHorizontal: 0,
    },
    image: {
        width: 70,
        height: 70,
    },
    textHeader: {
        fontSize: 22,
        color: '#fff',
        fontFamily: 'Ubuntu-Bold',
        fontWeight: 'bold',
    },
    scroll: {
        width: '100%',
        paddingHorizontal: 20,
    },
    chat: {
        width: '100%',
        height: 130,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    profile: {
    },
    borderImage: {
        width: 70,
        height: 70,
        zIndex: 2,
    },
    profileImage: {
        width: 60,
        height: 60,
        position: 'absolute',
        left: 5,
        top: 4,
        zIndex: 1,
    },
    logo: {
        width: 50,
        height: 50,
        position: 'absolute',
        left: 8,
        top: 12,
    },
    info: {
        paddingRight: 60,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    textName: {
        fontSize: 21,
        color: '#e6a502',
        fontFamily: 'Ubuntu-Medium',
        marginLeft: 20,
    },
    textMessage: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Ubuntu-Regular',
        marginLeft: 20,
        overflow: 'hidden',
    },
    line: {
        width: '100%',
        alignSelf: 'flex-end',
        borderBottomWidth: 0.2,
        borderColor: '#fff',
        // marginTop: 20,
        marginVertical: 0,
    },
});
