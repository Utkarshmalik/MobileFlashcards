import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  Main: {
    backgroundColor: 'red'
  }
});

class DeckComponent extends Component {

  render() {
    console.log(this.props)
    return (
      <View style={{ flex: 1 }}>
        <Container >
          <Content padder>
            <Card>
              <CardItem >
                <Text>DeckName</Text>
              </CardItem>
              <CardItem>
                <Text>
                  Number Of Cards
                </Text>
              </CardItem>
              <CardItem button onPress={() => this.props.navigation.navigate('quiz')}>
                <Text>Start Quiz</Text>
              </CardItem>
              <CardItem button onPress={() => this.props.navigation.navigate('addCard')}>
                <Text>Add Card</Text>
              </CardItem>
            </Card>
          </Content>
        </Container>
      </View>
    );
  }

}

export default DeckComponent;