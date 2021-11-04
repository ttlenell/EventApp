import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

const EventDetails = ({route}) => {
  let item = route.params.item;
  console.log(item);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.containerView}>
        <View style={styles.eventTitleView}>
          <Text>{item.title}</Text>
        </View>
        <View style={styles.eventInfoView}>
          <Text>{item.title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EventDetails;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
