import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductWrapper from './screens/ProductWrapper';
import {NavigationContainer} from '@react-navigation/native';
import UserList from './screens/UserList';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Product" component={ProductWrapper} />
        <Stack.Screen name="UserList" component={UserList} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
