import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import DeckMainComponent from './DeckMainComponent'
import { connect } from 'react-redux';
import { getDecksFromStorage } from '../Actions/index';
import NotificationService from './Notifications';
import { saveNotificationService } from '../Actions/index';




class DeckList extends Component {

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
    this.props.dispatch(saveNotificationService({ scheduleNotification: this.notification.scheduleNotification, cancelNotification: this.notification.cancelAll }));
    this.props.dispatch(getDecksFromStorage())

  }

  render() {

    if (this.props.deckAdded) {
      this.props.navigation.navigate('deckmain');

      // return(<View/>)

    }


    const { allDecks } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <FlatList
          key={item => { allDecks[item].title }}
          data={Object.keys(allDecks)}
          renderItem={({ item }) => <DeckMainComponent deck={allDecks[item]} navigation={this.props.navigation} dispatch={this.props.dispatch} />}
          keyExtractor={item => { return (allDecks[item].title) }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return ({
    allDecks: state.allDecks,
    deckAdded: state.deckAdded
  })
}

export default connect(mapStateToProps)(DeckList);