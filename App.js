import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DeckList from './src/Components/DeckList';
import DeckComponent from './src/Components/DeckComponent';
import MainNavigator from './Navigators/AppNavigator';
import AddCardComponent from './src/Components/AddCardComponent';
import QuizComponent from './src/Components/QuizComponent';
import AddDeck from './src/Components/AddNewDeck';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './src/Reducers/index';
import AsyncStorage from '@react-native-community/async-storage';
import NotificationService from './src/Components/Notifications';
import { saveNotificationService } from './src/Actions/index';
import { connect } from 'react-redux';


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
      <Stack.Screen name="addDeck" component={AddDeck}
      />
    </Stack.Navigator>
  )
}



class App extends Component {

  constructor(props) {
    super(props);
    //creating a new instance of the NotificationService 
    //& passing in the function we want called when the notification happens
    this.notification = new NotificationService(this.onNotification);

  }

  //Gets called when the notification comes in
  onNotification = (notif) => {
    Alert.alert(notif.title, notif.message);
  }

  //Permissions to use notifications
  handlePerm(perms) {
    Alert.alert("Permissions", JSON.stringify(perms));
  }



  componentDidMount() {
    this.notification.scheduleNotification()
    this.props.dispatch(saveNotificationService({ scheduleNotification: this.notification.scheduleNotification, cancelNotification: this.notification.cancelAll }));
  }



  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationContainer >
          <Tab.Navigator >
            <Tab.Screen name="DeckList" component={DeckStackTab} />
            <Tab.Screen name="AddDeck" component={AddDeckStackTab} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    state
  })
}

export default connect(mapStateToProps)(App);








