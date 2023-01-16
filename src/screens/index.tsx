import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import WeatherScreen from './WeatherScreen';
export type RootStackParamList = {
  Home: undefined;
  Weather: {latitude: 0; longitude: 0};
};
const AppNavigator = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Weather" component={WeatherScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
