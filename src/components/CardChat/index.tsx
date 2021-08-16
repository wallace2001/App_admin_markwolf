/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Image, Text, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Logo from '../../assets/logo_mark_wolf.png';
import ProfileImage from '../../assets/Hero_icon_frame_bg.png';
import BorderImage from '../../assets/Hero_icon_frame.png';

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

interface Props{
    item: PropsChat,
    request: PropsChat[],
    index: number;
    handleRemove: (id: string, user: string) => void;
}

export const CardChat = ({item, request, index, handleRemove}: Props) => {
    const navigation = useNavigation();
    return (
        <Swipeable
            overshootRight={false}
            renderRightActions={() => (
                    <View style={styles.remove}>
                        <TouchableOpacity
                            onPress={() => handleRemove(item.id, item.user)}
                        >
                            <Icon name="trash" size={32} color="#fff" />
                        </TouchableOpacity>
                    </View>
            )}
        >
            <TouchableOpacity activeOpacity={1.0} onPress={() => navigation.navigate('Speaking', item)} style={styles.chat}>
                <View style={styles.profile}>
                    <Image style={styles.borderImage} source={BorderImage} />
                    <Image style={styles.profileImage} source={ProfileImage} />
                    <Image style={styles.logo} source={Logo} />
                </View>
                    <View style={styles.info}>
                        <Text style={styles.textName}>{item.user}</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textMessage}>{
                            !request[index].client_finished ?
                            request[index].messages[request[index].messages.length - 1]?.text ?
                            request[index].messages[request[index].messages.length - 1]?.text : '' :
                            'O cliente finalizou a conversa'
                        }</Text>
                </View>
            </TouchableOpacity>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    chat: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 30,
        marginVertical: 5,
        backgroundColor: '#0e0601',
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
    remove: {
        width: 130,
        height: 100,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ec0a0a',
    },
});
