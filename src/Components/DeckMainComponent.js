import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Button } from "native-base";
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { currentDeckChange } from '../Actions/index';

const styles = StyleSheet.create({
  Main: {
    backgroundColor: 'red'
  }
});

class DeckMainComponent extends Component {

  _onPressButton() {
    this.props.dispatch(currentDeckChange(this.props.deck.title))
    this.props.navigation.navigate('deckmain');
  }

  render() {
    const { deck } = this.props;
    return (
      <View style={{ backgroundColor: 'white', flex: 1, height: 150, justifyContent: 'center' }}>
        <Container onClick={() => { console.log("Deck is pressed") }} >
          <Content padder>
            <TouchableOpacity onPress={this._onPressButton.bind(this)}>
              <Card style={{
                borderRadius: 5, borderColor: '#152238', padding: 10, flex: 1, justifyContent: 'center', alignItems: 'center'
              }}>
                <CardItem header>
                  < Text style={{ fontSize: 25, fontWeight: 'bold', color: "#296d98" }} >{deck.title}</Text>
                </CardItem>
                <CardItem>
                  <Body style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ color: "#23395d" }}>
                      {deck.questions.length} Cards
                </Text>
                  </Body>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </Content>
        </Container>
      </View>
    );
  }

}

export default DeckMainComponent;