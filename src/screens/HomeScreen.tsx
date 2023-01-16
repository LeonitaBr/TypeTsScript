import moment from 'moment';
import React, {memo, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GetLocation from 'react-native-get-location';
import LinearGradient from 'react-native-linear-gradient';
import WeatherComponent from '../components/WeatherComponent/WeatherComponent';
import WeatherCoordinates from '../components/WeatherCoordinates/WeatherCoordinates';
import LocationService from '../services/LocationService';
import {Colors} from './Colors';

const HomeScreen = () => {
  const now = moment(new Date());
  const getPosition = async () => {
    const position = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    });
    console.log('position', position);
  };
  useEffect(() => {
    getPosition();
  }, []);
  return (
    <LinearGradient
      colors={[Colors.LIGHT_GRAY, Colors.DARKER_GRAY]}
      style={styles.container}
      testID={'home-screen'}>
      <View style={styles.title}>
        <Text style={styles.date}>{now.format('MMM DD, YYYYY')}</Text>
        <Text style={styles.day}>{now.format('dddd')}</Text>
        <WeatherComponent />
        <Text testID="components-devider" style={styles.devider}>
          Or
        </Text>
        <WeatherCoordinates />
      </View>
    </LinearGradient>
  );
};
export default memo(HomeScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    alignContent: 'space-between',
    justifyContent: 'space-evenly',
  },
  title: {
    justifyContent: 'flex-end',
  },
  date: {
    color: Colors.GRAY,
    fontSize: 13,
  },
  day: {
    color: Colors.WHITE,
    fontSize: 21,
  },
  devider: {
    textAlign: 'center',
    color: Colors.WHITE,
  },
});
