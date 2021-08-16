/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {SplashScreen} from './src/pages/SplashScreen';
import {store} from './src/store';
import {Provider} from 'react-redux';
import {Router} from './src/route';
import { Loading } from './src/components/Loading';
import OneSignal from 'react-native-onesignal';

//8c5d1512-3348-4c78-914c-b77e91475025

const App = () => {
  const [openSplash, setOpenSlpah] = useState(true);

  useEffect(() => {

    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('8c5d1512-3348-4c78-914c-b77e91475025');

    OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
      console.log('OneSignal: notification will show in foreground:', notificationReceivedEvent);
      let notification = notificationReceivedEvent.getNotification();
      console.log('notification: ', notification);
      const data = notification.additionalData;
      console.log('additionalData: ', data);
      // Complete with null means don't show a notification.
      notificationReceivedEvent.complete(notification);
    });

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
    });

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
