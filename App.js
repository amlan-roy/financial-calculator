import React, { useState } from 'react';
import { Text, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import AppNavigator from './navigation/AppNavigator';
import Colors from './constants/Colors';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={(err) => {
          console.log(err);
        }}
      />
    );
  }
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={Colors.LightBlue} />
      <AppNavigator />
    </SafeAreaProvider>
  );
}
