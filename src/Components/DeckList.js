import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import DeckMainComponent from './DeckMainComponent'

const DATA = [1, 2]

class DeckList extends Component {
  render() {
    console.log(this.props)
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <DeckMainComponent navigation={this.props.navigation} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default DeckList;