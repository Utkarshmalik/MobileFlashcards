import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Button } from "native-base";
import { View, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  Main: {
    backgroundColor: 'red'
  }
});


class DeckMainComponent extends Component {

  _onPressButton() {
    console.log(this.props)

    this.props.navigation.navigate('deckmain');
  }

  render() {
    return (
      <View style={{ flex: 1, height: 140 }}>
        <Container onClick={() => { console.log("Deck is pressed") }} >
          <Content padder>
            <TouchableOpacity onPress={this._onPressButton.bind(this)}>

              <Card >
                <CardItem header>
                  <Text >Deck1</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
                      3 Cards
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