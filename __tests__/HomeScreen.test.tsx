import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';
import WeatherComponent from '../src/components/WeatherComponent/WeatherComponent';
import WeatherCoordinates from '../src/components/WeatherCoordinates/WeatherCoordinates';
import {View} from 'react-native';

jest.mock('../src/components/WeatherCoordinates/WeatherCoordinates', () =>
  // ../src/components/WeatherCoordinates/WeatherCoordinates
  jest.fn().mockReturnValue(null),
);
jest.mock('../src/components/WeatherComponent/WeatherComponent', () =>
  jest.fn().mockReturnValue(null),
);

describe('Homescreen', () => {
  test('should render properly', () => {
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('home-screen');
  });
  describe('Title section', () => {
    beforeEach(() => {
      jest.useFakeTimers('modern');
      jest.setSystemTime(946684800000);
    });
    afterEach(() => {
      jest.useRealTimers();
    });
    // test('should render properly', () => {
    //   const wrapper = render(<HomeScreen />);
    //   wrapper.getByText('Jan 01, 2000');
    // });
    test('should render properly', () => {
      const wrapper = render(<HomeScreen />);
      wrapper.getByText('Saturday');
    });
  });
  test('should contain a components devider', () => {
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('components-devider');
  });
  test('should contain a section to get current weather', () => {
    (WeatherComponent as any as jest.Mock).mockReturnValue(
      <View testID={'mock-weather-component'} />,
    );
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('mock-weather-component');
  });
  test('should contain a section to get weather Coordinates', () => {
    (WeatherCoordinates as any as jest.Mock).mockReturnValue(
      <View testID={'mock-weather-coordinates'} />,
    );
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId('mock-weather-coordinates');
  });
});
