// react & react-native
import React from 'react';
// import {SafeAreaProvider} from 'react-native-safe-area-context';

// context
// import {FirebaseProvider} from './src/context/FirebaseContext';
// import {UserProvider} from './src/context/UserContext';

//navigation
import {NavigationContainer} from '@react-navigation/native';
// import AppStackScreens from './src/stacks/AppStackScreens';
import MainStackScreens from './src/stacks/MainStackScreens';
// import BottomTabsNavigation from './src/navigation/BottomTabsNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainStackScreens />
    </NavigationContainer>
  );
};

export default App;
