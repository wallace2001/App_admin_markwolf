/* eslint-disable prettier/prettier */
// import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, ImageBackground} from 'react-native';
import BackgroundImage from '../../assets/little_background_frame.png';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../store/action/message.action';

interface Props{
    route: any;
}

interface MessageProps{
    text: string;
    user_id: string;
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

interface PropsScroll{
    scrollToEnd: ({animated}: any) => void;
}

export const Speaking = ({route}: Props) => {
    const [message, setMessage] = useState<string>('');
    const [tamScroll, setTamScroll] = useState<PropsScroll>();
    const [selectedChat, setSelectedChat] = useState<PropsChat>();
    const {user, user_id, client_finished, room_id} = route.params;

    const dispatch = useDispatch();
    const {person} = useSelector((state: RootStateOrAny) => state.AuthReducer);
    const {messages} = useSelector((state: RootStateOrAny) => state.MessageReducer);

    useEffect(() => {
        const filtered = messages.find((item: any) => {
            return item.user_id === user_id;
    });

        setSelectedChat(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages]);

    const handleSendMessage = () => {
        if (client_finished){
            return;
        }
        const data = {
            message: message,
            user_id: person.id,
            room_id: room_id,
            from: person.id,
            to_id: selectedChat?.id,
        };
        setMessage('');
        dispatch(sendMessage(data));
    };

    return (
        <ImageBackground resizeMode="cover" source={BackgroundImage} style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>{user}</Text>
                {/* <Icon onPress={() => navigation.goBack()} name="arrow-left" size={30} color="#fff" /> */}
            </View>
            <ScrollView 
                ref={(ref: any) => setTamScroll(ref)}
                onContentSizeChange={() => tamScroll?.scrollToEnd({animated: true})}
                style={styles.content}>
                {selectedChat?.messages.map((item: any, index: number) => {
                            return (
                                item.user_id === user_id ? (
                                <View key={index} style={styles.client}>
                                    <Text style={styles.clientText}>{item.text}</Text>
                                </View>
                                ) : (
                                <View key={index} style={styles.admin}>
                                    <Text style={styles.adminText}>{item.text}</Text>
                                </View>
                                )
                            );
                })}
            </ScrollView>
            <View style={styles.footer}>
                <TextInput value={message} onChangeText={(e: string) => setMessage(e)} style={styles.input} />
                <RectButton onPress={() => handleSendMessage()} style={styles.button}>
                    <Icon name="paper-plane" size={30} color="#000" />
                </RectButton>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#0c0a02',
    },
    header: {
        width: '100%',
        height: 100,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00000032',

        justifyContent: 'space-between',
    },
    back: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Ubuntu-Bold',
    },
    name: {
        fontSize: 25,
        marginTop: 30,
        color: '#e6a502',
        fontFamily: 'Ubuntu-Bold',
    },
    content: {
        width: '100%',
        height: 'auto',
        paddingHorizontal: 20,
    },
    admin: {
        width: 'auto',
        maxWidth: '70%',
        alignSelf: 'flex-end',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    adminText: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'Ubuntu-Regular',
    },
    client: {
        width: 'auto',
        maxWidth: '70%',
        alignSelf: 'flex-start',
        backgroundColor: '#8affa9',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    clientText: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'Ubuntu-Regular',
    },
    footer: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    input: {
        width: 300,
        height: '100%',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        fontFamily: 'Ubuntu-Regular',
        backgroundColor: '#ffffff1c',
        fontSize: 20,
        color: '#fff',
    },
    button: {
        width: 60,
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
