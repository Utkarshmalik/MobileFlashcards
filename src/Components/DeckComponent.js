import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Button } from "native-base";
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';


class DeckComponent extends Component {



  render() {
    const { currentDeck } = this.props;
    return (
      <View style={{ padding: 20, flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
        <View style={{ flex: 3, alignSelf: 'center', justifyContent: 'center' }} >
          <Text style={{ fontSize: 50, color: "#23395d" }}>{currentDeck.title}</Text>
        </View>
        <View style={{ flex: 1, alignSelf: 'center' }}>
          <Text style={{ fontSize: 30, color: "#23395d" }} >
            {currentDeck.questions.length} Cards Present
          </Text>
        </View>
        <View style={{ flex: 4 }}>
          <Button onPress={() => this.props.navigation.navigate('quiz')} style={{ alignItems: 'center', marginBottom: 10 }} >
            <Text style={{ flex: 1, textAlign: 'center' }}>Start Quiz</Text>
          </Button>
          <Button onPress={() => this.props.navigation.navigate('addCard')} >
            <Text style={{ flex: 1, textAlign: 'center' }}>Add Card</Text>
          </Button>
          <Text style={{ flex: 1, textAlign: 'center' }}>
          </Text>
        </View>
      </View>
    );
  }

}

const mapStateToProps = (state) => {
  return ({
    currentDeck: state.allDecks[state.currentDeck]
  })
}

export default connect(mapStateToProps)(DeckComponent);