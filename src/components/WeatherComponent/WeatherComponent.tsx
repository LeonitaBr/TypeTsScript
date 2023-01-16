import {useNavigation} from '@react-navigation/native';
import React, {memo, useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LocationService from '../../services/LocationService';
import WeatherButton from '../WeatherButton/WeatherButton';

const WeatherComponent = () => {
  const navigation = useNavigation();
  const handleFetchWeather = useCallback(async () => {
    navigation.navigate('Weather', {
      latitude: 0,
      longitude: 0,
    });
  }, [navigation]);

  return (
    <TouchableOpacity testID="weather-button" onPress={handleFetchWeather}>
      <Text>press button</Text>
    </TouchableOpacity>
    // <WeatherButton
    //   testID={'weather-button'}
    //   onPress={handleFetchWeather}
    //   label={'Press here'}
    // />
  );
};
export default memo(WeatherComponent);
