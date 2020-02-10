import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Button } from 'native-base';
import { View, StyleSheet, Text } from 'react-native'
import { addNewDeck } from '../Actions/index';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  Main: {
    backgroundColor: 'red'
  }
});

class AddNewDeck extends Component {


  state = {
    deckValue: ""
  }

  onnAddNewDeck() {
    console.log(this.props)

    this.props.dispatch(addNewDeck(this.state.deckValue))
    this.props.navigation.navigate('DeckList');

    this.setState({ deckValue: "" })
  }




  render() {
    return (
      <View style={{ padding: 20, flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
        <Container >
          <View style={{ flex: 3, marginTop: 35 }}>
            <Text style={{ fontSize: 40, color: "#23395d" }}> What is the title of your deck ? </Text>
          </View>
          <View style={{ flex: 2, }}>
            <Item rounded>
              <Input style={{ color: "#23395d" }} value={this.state.deckValue} placeholder='Rounded Textbox' onChangeText={(value) => {
                this.setState({ deckValue: value })
              }} />
            </Item>

          </View>
          <View style={{ flex: 3 }}>
            <Button onPress={this.onnAddNewDeck.bind(this)} full>
              <Text style={{ color: "white" }}>Submit</Text>
            </Button>
          </View>

        </Container>
      </View>
    );
  }

}



export default connect()(AddNewDeck);