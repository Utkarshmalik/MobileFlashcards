import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DeckMainComponent from './DeckMainComponent'
import { connect } from 'react-redux';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body } from 'native-base';



class QuizMainComponent extends Component {

  state = {
    answer: false
  }



  onCorrect() {
    const { onAnswerPress } = this.props;

    onAnswerPress(this.props.questionNum + 1, true);
  }

  onInCorrect() {
    const { onAnswerPress } = this.props;

    onAnswerPress(this.props.questionNum + 1, false);
  }

  onSwitchAnswer() {
    this.setState({
      answer: !this.state.answer
    })
  }

  render() {
    const { questionNum, questions } = this.props;
    return (

      <View style={{ padding: 20, backgroundColor: 'white', marginTop: 50, flex: 1, justifyContent: 'space-around' }}>
        <View style={{ flex: 2 }}>

          <View >
            <Text >
              {`Question ${questionNum + 1} of ${questions.length}`}
            </Text>
          </View>
        </View>
        <View style={{ flex: 6 }}>
          <View>
            <Text style={{ color: "#1c2e4a", fontSize: 40 }}> {questions[questionNum].question}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Button onPress={this.onSwitchAnswer.bind(this)} transparent>
              <Text style={{ color: "#3792cb" }}>  {(this.state.answer) ? ("Hide Answer") : ("Show Answer")}  </Text>
            </Button>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ color: "#23395d", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              {(this.state.answer) ? (questions[questionNum].answer) : ("")}
            </Text>
          </View>
        </View>

        <View style={{ flex: 8 }}>
          <Button onPress={this.onCorrect.bind(this)} style={{ alignItems: 'center', marginBottom: 10 }} >
            <Text style={{ flex: 1, textAlign: 'center', color: "white" }}>Correct</Text>
          </Button>

          <Button onPress={this.onInCorrect.bind(this)} >
            <Text style={{ flex: 1, textAlign: 'center', color: "white" }}>Incorrect</Text>
          </Button>

          <Text style={{ flex: 1, textAlign: 'center' }}>

          </Text>


        </View>
      </View >
    );
  }
}

const mapStateToProps = (state) => {

  console.log(state)

  return ({
    state
  })
}

export default connect(mapStateToProps)(QuizMainComponent);