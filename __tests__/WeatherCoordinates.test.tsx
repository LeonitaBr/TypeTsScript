import React from 'react';
import {render} from '@testing-library/react-native';
import WeatherCoordinates from '../src/components/WeatherCoordinates/WeatherCoordinates';

describe('Weather Component', () => {
  test('should render correctly', () => {
    const wrapper = render(<WeatherCoordinates />);
    wrapper.getByTestId('weather-coordinates');
  });
});
