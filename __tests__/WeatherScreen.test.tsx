import React from 'react';
import {render} from '@testing-library/react-native';
import WeatherScreen from '../src/screens/WeatherScreen';
import {useNavigation} from '@react-navigation/native';

describe('Weather Component', () => {
  test('should render correctly', () => {
    const wrapper = render(<WeatherScreen />);
    wrapper.getByTestId('weather-screen');
  });
});
