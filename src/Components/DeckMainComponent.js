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
    console.log(this.props)
    this.props.dispatch(currentDeckChange(this.props.deck.title))
    this.props.navigation.navigate('deckmain');
  }

  render() {

    const { deck } = this.props;

    console.log(this.props)
    return (
      <View style={{ flex: 1, height: 140 }}>
        <Container onClick={() => { console.log("Deck is pressed") }} >
          <Content padder>
            <TouchableOpacity onPress={this._onPressButton.bind(this)}>

              <Card >
                <CardItem header>
                  <Text >{deck.title}</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
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