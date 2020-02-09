import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Button, Label } from 'native-base';
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux';

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
    console.log("Add Card to Deck")
    console.log(this.state.answer)
    console.log(this.state.question)
  }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Container >
          <View style={{ flex: 6, marginTop: 40, justifyContent: 'space-around' }}>
            <View>
              <Label>
                Question
        </Label>
              <Item rounded>
                <Input value={this.state.question} onChangeText={(value) => {
                  this.setState({ question: value })
                }} placeholder='Rounded Textbox' />
              </Item>
            </View>
            <View>
              <Label>
                Answer
      </Label>
              <Item rounded>
                <Input value={this.state.answer} onChangeText={(value) => {
                  this.setState({ answer: value })
                }} placeholder='Rounded Textbox' />
              </Item>
            </View>
          </View>

          <View style={{ flex: 3 }}>
            <Button onPress={this.onAddCardToDeck.bind(this)} full light>
              <Text>Submit</Text>
            </Button>
          </View>

        </Container>
      </View>
    );
  }

}

const mapStateToProps = (state) => {
  console.log(state)

  return ({
    state
  })
}

export default connect()(AddNewDeck);