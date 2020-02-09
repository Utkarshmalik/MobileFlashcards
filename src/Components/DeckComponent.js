import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  Main: {
    backgroundColor: 'red'
  }
});

class DeckComponent extends Component {



  render() {
    console.log(this.props)

    const { currentDeck } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Container >
          <Content padder>
            <Card>
              <CardItem >
                <Text>{currentDeck.title}</Text>
              </CardItem>
              <CardItem>
                <Text>
                  {currentDeck.questions.length}
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

const mapStateToProps = (state) => {
  console.log(state)

  return ({
    currentDeck: state.allDecks[state.currentDeck]
  })
}

export default connect(mapStateToProps)(DeckComponent);