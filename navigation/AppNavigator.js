import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from '../screens/MainScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import DetailsScreen from '../screens/DetailsScreen';
import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();
const navigationOptions = {
  headerTitleAlign: 'center',
  headerTransparent: true,
  headerStyle: {
    backgroundColor: Colors.LightBlue,
    elevation: 0,
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'open-sans',
  },
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={navigationOptions}
        initialRouteName="Main"
      >
        <Stack.Screen
          name="Main"
          options={{ title: 'Financial Helper' }}
          component={MainScreen}
        />
        <Stack.Screen
          name="Calculator"
          component={CalculatorScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
