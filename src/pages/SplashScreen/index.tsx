/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Logo from '../../assets/logo_mark_wolf.png';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Logo} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#080c1f',
    },
    image: {
        width: 150,
        height: 150,
    },
});
