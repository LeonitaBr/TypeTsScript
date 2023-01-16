import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import WeatherComponent from '../src/components/WeatherComponent/WeatherComponent';
import {useNavigation} from '@react-navigation/native';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual<object>('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});
describe('Weather Component', () => {
  test('should render correctly', () => {
    const wrapper = render(<WeatherComponent />);
    // wrapper.getByTestId('weather-current');
  });
  test('should navigate to weather screen with location', async () => {
    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValueOnce({navigate: mockNavigate});
    const wrapper = render(<WeatherComponent />);
    const button = wrapper.getByTestId('weather-button');
    fireEvent.press(button);
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('Weather', {
        latitude: 0,
        longitude: 0,
      });
    });
  });
});
