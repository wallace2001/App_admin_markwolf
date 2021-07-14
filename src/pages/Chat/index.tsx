/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Logo from '../../assets/logo_mark_wolf.png';
import ProfileImage from '../../assets/Hero_icon_frame_bg.png';
import BorderImage from '../../assets/Hero_icon_frame.png';
import { useNavigation } from '@react-navigation/native';

export const Chat = () => {

    const navigation = useNavigation();
    const fakeData = [
        {
            id: '3930_f0333',
            name: 'Wallace',
            last_message: 'Olá, Gostaria de saber o valor da sprite',
        },
        {
            id: '3930_f0333',
            name: 'Lívia',
            last_message: 'Olá, Gostaria de saber o valor da sprite',
        },
        {
            id: '3930_f0333',
            name: 'Bruno',
            last_message: 'Olá, Gostaria de saber o valor da sprite',
        },
        {
            id: '3930_f0333',
            name: 'Marquinho',
            last_message: 'Olá, Gostaria de saber o valor da sprite',
        },
        {
            id: '3930_f0333',
            name: 'Marquinho',
            last_message: 'Olá, Gostaria de saber o valor da sprite',
        },
        {
            id: '3930_f0333',
            name: 'Marquinho',
            last_message: 'Olá, Gostaria de saber o valor da sprite',
        },
        {
            id: '3930_f0333',
            name: 'Marquinho',
            last_message: 'Olá, Gostaria de saber o valor da sprite',
        },
    ];

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>Bem vindo MarkWolf</Text>
            <Image source={Logo} resizeMode="contain" style={styles.image} />
        </View>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
            {fakeData.map((item: any, index: number) => {
                return (
                    <RectButton onPress={() => navigation.navigate('Speaking', item)} key={index} style={styles.chat}>
                        <View style={styles.profile}>
                            <Image style={styles.borderImage} source={BorderImage} />
                            <Image style={styles.profileImage} source={ProfileImage} />
                            <Image style={styles.logo} source={Logo} />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.textName}>{item.name}</Text>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textMessage}>{item.last_message}</Text>
                        </View>
                    </RectButton>
                );
            })}
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#070116',
    },
    header: {
        width: '100%',
        height: 100,
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',

        justifyContent: 'space-between',
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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profile: {
    },
    borderImage: {
        width: 90,
        height: 90,
        zIndex: 2,
    },
    profileImage: {
        width: 80,
        height: 80,
        position: 'absolute',
        left: 5,
        top: 4,
        zIndex: 1,
    },
    logo: {
        width: 60,
        height: 60,
        position: 'absolute',
        left: 13,
        top: 16,
    },
    info: {},
    textName: {
        fontSize: 25,
        color: '#e6a502',
        fontFamily: 'Ubuntu-Bold',
        marginLeft: 20,
    },
    textMessage: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Ubuntu-Bold',
        marginLeft: 20,
        overflow: 'hidden',
    },
});
