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
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const renderItem = (item: number) => {
    return (
      <View>
        <Text>{item}</Text>
      </View>
    );
  };
  const test: string = 'Heading';
  const list: number[] = [1, 2, 4];
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text>{test}</Text>
      <FlatList data={list} renderItem={({item}) => renderItem(item)} />
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
