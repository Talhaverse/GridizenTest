import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';

import Homescreen from './screens/homescreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

        <Toast />
      <Stack.Navigator >
        <Stack.Screen name="homescreen" component={Homescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
