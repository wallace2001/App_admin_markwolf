import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {SplashScreen} from './src/pages/SplashScreen';
import {Router} from './src/route';

const App = () => {
  const [openSplash, setOpenSlpah] = useState(true);

  setTimeout(() => {
    setOpenSlpah(false);
  }, 2 * 1000);

  if (openSplash) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      <Router />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
