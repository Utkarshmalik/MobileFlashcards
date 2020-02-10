/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import test from './src/Components/Test';
import DeckList from './src/Components/DeckList';
import DeckComponent from './src/Components/DeckComponent';
import MainNavigator from './Navigators/AppNavigator';
import AddCardComponent from './src/Components/AddCardComponent';
import QuizComponent from './src/Components/QuizComponent';
import AddDeck from './src/Components/AddNewDeck';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './src/Reducers/index';
import ReduxThunk from 'redux-thunk';
import Notifications from './src/Components/Notifications'


const store = createStore(Reducers, applyMiddleware(ReduxThunk));


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




const DeckStackTab = () => {


  return (
    <Stack.Navigator >
      <Stack.Screen name="DeckList" component={DeckList} />
      <Stack.Screen name="deckmain" component={DeckComponent}
      />
      <Stack.Screen name="quiz" component={QuizComponent} />
      <Stack.Screen name="addCard" component={AddCardComponent} />
    </Stack.Navigator>
  )

}




const AddDeckStackTab = () => {


  return (
    <Stack.Navigator  >
      <Stack.Screen name="addDeck" component={AddDeck} />

    </Stack.Navigator>
  )

}



class App extends Component {

  render() {
    console.log(this.props)
    return (
      <Provider store={store}>
        <NavigationContainer >
          <Tab.Navigator >
            <Tab.Screen name="DeckList" component={DeckStackTab} />
            <Tab.Screen name="AddDeck" component={AddDeckStackTab} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;








