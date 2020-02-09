/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import test from './src/Components/Test';

import React from 'react';
import MainNavigator from './Navigators/AppNavigator';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';





const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Dashboard">
          {
            () => (
              <Tab.Navigator >
                <Tab.Screen name="Decks" component={test} />
                <Tab.Screen name="AddDeck" component={test} />
              </Tab.Navigator>
            )
          }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}








