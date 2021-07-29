/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {SplashScreen} from './src/pages/SplashScreen';
import {store} from './src/store';
import {Provider} from 'react-redux';
import {Router} from './src/route';
import { Loading } from './src/components/Loading';
import { useEffect } from 'react';
import { CreateChannel } from './src/services/notification';

const App = () => {
  const [openSplash, setOpenSlpah] = useState(true);

  useEffect(() => {
    CreateChannel();
  }, []);

  setTimeout(() => {
    setOpenSlpah(false);
  }, 2 * 1000);

  if (openSplash) {
    return <SplashScreen />;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.sectionContainer}>
        <StatusBar backgroundColor="#fff" barStyle={'dark-content'} translucent />
        <Loading />
        <Router />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
