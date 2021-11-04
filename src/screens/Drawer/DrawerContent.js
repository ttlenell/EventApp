// react & react native
import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

// npm packages
// import Icon from 'react-native-vector-icons/FontAwesome';
// import I18n from '../../utils/i18n';
import {SafeAreaView} from 'react-native-safe-area-context';

// context
// import {UserContext} from '../../context/UserContext';
// import {FirebaseContext} from '../../context/FirebaseContext';
// components

const DrawerContent = props => {
  // const [user, setUser] = useContext(UserContext);
  // const {Firebase} = useContext(FirebaseContext);
  const [, setDisplayName] = useState('');

  let today = new Date();

  const date =
    today.getFullYear() +
    ' - ' +
    (today.getMonth() + 1) +
    ' - ' +
    today.getDate();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F0F0F0'}}>
      <View style={styles.container}>
        <View style={styles.dateView}>
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.drawerButton}>
            <Text style={styles.buttonText}>Se event nära dig</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerButton}>
            <Text style={styles.buttonText}>Se event i en annan stad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerButton}>
            <Text style={styles.buttonText}>Mina favoriter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerButton}>
            <Text style={styles.buttonText}>Min eventhistorik</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerButton}>
            <Text style={styles.buttonText}>Inloggning för företag</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.logOutButtonView}>
          <TouchableOpacity style={styles.logoutButton}>
            <Text>logga ut</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  buttonsContainer: {
    flex: 1,

    justifyContent: 'flex-start',
    marginTop: '20%',
    // margin: 30,
    // backgroundColor: '#fff',
    // padding: 20,
    alignItems: 'flex-start',
  },
  drawerButton: {
    // borderWidth: 2,
    borderRadius: 5,
    // backgroundColor: '#DFBE9F',

    // borderColor: 'yellow',
    margin: 5,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.4,
    padding: 10,
  },
  dateView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderBottomWidth: 2,
    padding: 5,
    marginTop: '10%',
  },
  dateText: {
    fontSize: 18,
    color: 'black',
  },
  buttonText: {
    fontSize: 22,
    color: '#DFBE9F',
    fontWeight: 'bold',
    fontFamily: 'Didot',
  },
  logoutButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logOutButtonView: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default DrawerContent;
