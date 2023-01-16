import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import WeatherButton from '../src/components/WeatherButton/WeatherButton';

describe('Weather Button', () => {
  test('should renderCorrectly', () => {
    const wrapper = render(<WeatherButton label="" onPress={jest.fn()} />);
    wrapper.getByTestId('weather-button');
  });
  test('should render when loader is loading', () => {
    const wrapper = render(
      <WeatherButton label="" onPress={jest.fn()} loading />,
    );
    wrapper.getByTestId('button-loading');
  });
  test('should render when button is clicked', () => {
    const mockPress = jest.fn();
    const wrapper = render(<WeatherButton label="" onPress={mockPress} />);
    const button = wrapper.getByTestId('weather-button');
    fireEvent.press(button);
    expect(mockPress).toHaveBeenCalled();
  });
  test('should render when label ', () => {
    const wrapper = render(<WeatherButton label="" onPress={jest.fn()} />);
    wrapper.getByTestId('label-id');
  });
  test('should render other props', () => {
    const wrapper = render(
      <WeatherButton
        onPress={() => jest.fn()}
        label="AAAA"
        testID="lineaer-test-id"
      />,
    );
    wrapper.getByTestId('lineaer-test-id');
  });
});
