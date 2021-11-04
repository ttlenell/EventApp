// react & react native
import React from 'react';
import {StyleSheet} from 'react-native';

// npm packages
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';

// components
import DrawerContent from '../screens/Drawer/DrawerContent';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, drawerPosition: 'right'}} // remember to restart metro server after changing drawer pos
      drawerStyle={styles.drawStyle}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        drawerPosition="right"
        component={HomeScreen}
        options={{headerTitle: '', headerStyle: {backgroundColor: '#F0F0F0'}}}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawStyle: {
    width: '70%',
  },
});

export default DrawerNavigator;
