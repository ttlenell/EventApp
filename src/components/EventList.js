import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
  View,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const EventList = () => {
  const navigation = useNavigation();
  const data = [
    {
      title: 'Fest 1',
      id: 0,
      description: 'Stor fest med massa bajs och glass ',
    },
    {
      title: 'Fest i SKOLSTA',
      id: 1,
      description:
        'ctronic , remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      address: 'Krökgatan 1',
      eventTime: '19:00',
      eventDate: '24 devember',
    },
    {
      title: 'FEST HOS MANGE',
      id: 2,
      description: 'turk hit och turk dit',
      address: 'Krökgatan 1',
      eventTime: '19:00',
      eventDate: '24 devember',
    },
    {
      title: 'FEST HOS MANGE',
      id: 3,
      description: 'turk hit och turk dit',
      address: 'Krökgatan 1',
      eventTime: '19:00',
      eventDate: '24 devember',
    },
  ];
  return (
    <View style={styles.outerContainer}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('EventDetails', {item});
                }}>
                <View style={styles.cardItemContainer}>
                  <View style={styles.textContainer}>
                    <Text style={styles.titleStyle}>{item.title}</Text>
                    <Text>{item.description}</Text>
                  </View>
                  <View>
                    <Image
                      style={styles.imageStyle}
                      source={require('../assets/event.jpg')}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default EventList;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    // justifyContent: 'center',
    width: '100%',
  },
  cardItemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.4,
    margin: 6,
    marginHorizontal: 10,
    padding: 14,
    borderRadius: 5,
    elevation: 1,
  },
  textContainer: {
    // textAlign: 'left',
    // justifyContent: 'flex-start',
    width: '70%',
  },
  imageStyle: {
    // flex: 1,
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
  },
  titleStyle: {
    fontSize: 22,
    fontFamily: 'Helvetica',
  },
});
