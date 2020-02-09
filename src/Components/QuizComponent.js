import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import DeckMainComponent from './DeckMainComponent'



class QuizComponent extends Component {
  render() {
    console.log(this.props)
    return (
      <View style={{ flex: 1 }}>
        <Text>Quiz is here</Text>
      </View>
    );
  }
}

export default QuizComponent;