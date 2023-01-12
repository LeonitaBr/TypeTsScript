/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import Button from './src/components/Button/Button';
// import Label from './src/components/Label/Label';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  // const renderItem = (item: number) => {
  //   return (
  //     <View>
  //       <Text>{item}</Text>
  //     </View>
  //   );
  // };
  // const test: string = 'Heading';
  // const list: number[] = [1, 2, 4];
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <LoginScreen />
      {/* <Label title={test} />
      <FlatList data={list} renderItem={({item}) => renderItem(item)} />
      <Button onPressButton={() => {}} title={'Press Button'} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
