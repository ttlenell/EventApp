import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import AddTripScreen from '../screens/AddTripScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';
// import FavoritesScreen from '../screens/FavoritesScreen';
// import SettingsScreen from '../screens/SettingsScreen';
// import BottomTabsNavigation from '../navigation/BottomTabsNavigation';
import DrawerNavigator from '../navigation/DrawerNavigator';

const MainStack = createStackNavigator();

const MainStackScreens = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="HomeScreen"
        // component={BottomTabsNavigation}
        component={DrawerNavigator}
        options={{
          headerShown: false,
          title: '',
          headerStyle: {backgroundColor: '#F0F0F0'},
        }}
      />
      <MainStack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
        option={{
          headerShown: false,
          headerStyle: {backgroundColor: '#F0F0F0'},
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackScreens;
