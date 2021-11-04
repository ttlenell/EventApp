import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';

import EventList from '../components/EventList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Events nära dig!</Text>
        <EventList />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
});
