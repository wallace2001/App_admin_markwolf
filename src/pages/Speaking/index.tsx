/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Props{
    route: any;
}

export const Speaking = ({route}: Props) => {
    const navigation = useNavigation();
    const {name} = route.params;
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>{name}</Text>
                <Icon onPress={() => navigation.goBack()} name="arrow-left" size={30} color="#fff" />
            </View>
            <ScrollView style={styles.content}>
                <View style={styles.client}>
                    <Text style={styles.clientText}>Olá, estou com dúvidas.</Text>
                </View>
                <View style={styles.admin}>
                    <Text style={styles.adminText}>Posso te ajudar ?.</Text>
                </View>
                <View style={styles.client}>
                    <Text style={styles.clientText}>Olá, estou com dúvidas.</Text>
                </View>
                <View style={styles.admin}>
                    <Text style={styles.adminText}>Posso te ajudar ?.</Text>
                </View>
                <View style={styles.client}>
                    <Text style={styles.clientText}>Olá, estou com dúvidas.</Text>
                </View>
                <View style={styles.admin}>
                    <Text style={styles.adminText}>Posso te ajudar ?.</Text>
                </View>
                <View style={styles.client}>
                    <Text style={styles.clientText}>Olá, estou com dúvidas.</Text>
                </View>
                <View style={styles.admin}>
                    <Text style={styles.adminText}>PPosso te ajudar ?.Posso te ajudar ?.Posso te ajudar ?.osso te ajudar ?.</Text>
                </View>
                <View style={styles.client}>
                    <Text style={styles.clientText}>Olá, estou com dúvidas.</Text>
                </View>
                <View style={styles.admin}>
                    <Text style={styles.adminText}>Posso te ajudar ?.</Text>
                </View>
                <View style={styles.client}>
                    <Text style={styles.clientText}>Olá, estou com dúvidas.</Text>
                </View>
                <View style={styles.admin}>
                    <Text style={styles.adminText}>Posso te ajudar ?.</Text>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <TextInput style={styles.input} />
                <RectButton style={styles.button}>
                    <Icon name="paper-plane" size={30} color="#000" />
                </RectButton>
            </View>
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
    back: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Ubuntu-Bold',
    },
    name: {
        fontSize: 25,
        color: '#fff',
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
        fontFamily: 'Ubuntu-Bold',
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
        fontFamily: 'Ubuntu-Bold',
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
