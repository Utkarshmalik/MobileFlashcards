import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Button, Label } from 'native-base';
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux';
import { addCardToDeck } from '../Actions/index';

const styles = StyleSheet.create({
  Main: {
    backgroundColor: 'red'
  }
});

class AddNewDeck extends Component {

  state = {
    question: "",
    answer: ""
  }

  onAddCardToDeck() {


    const { question, answer } = this.state;
    const { currentDeck } = this.props;

    const newCard = {
      question,
      answer
    }

    console.log(currentDeck);
    console.log(newCard);

    this.props.dispatch(addCardToDeck(currentDeck, newCard));

    this.props.navigation.navigate('DeckList');
  }


  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', padding: 20 }}>
        <Container >
          <View style={{ flex: 6, marginTop: 40, justifyContent: 'space-around' }}>
            <View>
              <Label style={{ fontSize: 25, fontWeight: 'bold', color: "#23395d" }}>
                Question
        </Label>
              <Item rounded>
                <Input style={{ color: "#23395d" }} value={this.state.question} onChangeText={(value) => {
                  this.setState({ question: value })
                }} placeholder='Rounded Textbox' />
              </Item>
            </View>
            <View>
              <Label style={{ fontSize: 25, fontWeight: 'bold', color: "#23395d" }}>
                Answer
      </Label>
              <Item rounded>
                <Input style={{ color: "#23395d" }} value={this.state.answer} onChangeText={(value) => {
                  this.setState({ answer: value })
                }} placeholder='Rounded Textbox' />
              </Item>
            </View>
          </View>

          <View style={{ flex: 3 }}>
            <Button onPress={this.onAddCardToDeck.bind(this)} full>
              <Text>Submit</Text>
            </Button>
          </View>

        </Container>
      </View>
    );
  }

}

const mapStateToProps = (state) => {

  const { currentDeck } = state;

  return ({
    currentDeck
  })
}


export default connect(mapStateToProps)(AddNewDeck);