import React, {useEffect} from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {View} from 'react-native';
import AppNavigator from '../src/screens';
import HomeScreen from '../src/screens/HomeScreen';
import {useNavigation} from '@react-navigation/native';
import WeatherScreen from '../src/screens/WeatherScreen';
jest.mock('../src/screens/HomeScreen', () => jest.fn());
jest.mock('../src/screens/WeatherScreen', () => jest.fn());
describe('App navigator', () => {
  test('should render correctly', async () => {
    (HomeScreen as jest.Mock).mockReturnValueOnce(
      <View testID="mock-home-screen" />,
    );
    const wrapper = render(<AppNavigator />);
    await waitFor(() => {
      wrapper.getByTestId('mock-home-screen');
    });
  });
  test('should render weatherScreen on "weather" router', async () => {
    (HomeScreen as jest.Mock).mockImplementationOnce(() => {
      const navigation = useNavigation();
      useEffect(() => {
        navigation.navigate('Weather');
      }, [navigation]);
      return null;
    });
    (WeatherScreen as jest.Mock).mockReturnValueOnce(
      <View testID="mock-weather-screen" />,
    );
    const wrapper = render(<AppNavigator />);
    await waitFor(() => {
      wrapper.getByTestId('mock-weather-screen');
    });
  });
});
