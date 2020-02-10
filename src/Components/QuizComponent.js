import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import DeckMainComponent from './DeckMainComponent'
import { connect } from 'react-redux';
import QuizMainComponent from './QuizMainComponent';
import { cos } from 'react-native-reanimated';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import NotificationService from './Notifications';


class QuizComponent extends Component {

  state = {
    currentQuestion: 0,
    correct: 0
  }

  onChangeQuestion(nextQuesNo, status) {
    const { correct } = this.state;
    this.setState({
      currentQuestion: nextQuesNo,
      correct: (status) ? (correct + 1) : (correct)
    })
  }

  onrestartQuiz() {
    this.setState({
      currentQuestion: 0,
      correct: 0
    })
  }

  onQuizFinish() {
    const { scheduleNotification, cancelNotification } = this.props.notificationService;
    //canel the notification
    cancelNotification()
    //add the notification for the next day
    scheduleNotification()
  }

  onGoBackToDecks() {
    this.props.navigation.navigate("DeckList");
  }


  render() {
    const { num, allDecks, currentDeck } = this.props;
    return (
      (num === 0) ?
        (
          <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} ><Text style={{ textAlign: 'center', fontSize: 20, color: "#152238" }}>Cant start the quiz as no cards present</Text>
          </View>
        ) :
        (

          (this.state.currentQuestion == this.props.num) ?
            (
              <View style={{ flex: 1, backgroundColor: 'white', padding: 20, justifyContent: 'space-around', alignItems: 'center' }} >
                {this.onQuizFinish()}
                <Text style={{ fontSize: 40, color: "#152238" }}>
                  Congralutations!
              </Text>
                <Text style={{ fontSize: 30, color: "#152238" }}>
                  Quiz Completed
              </Text>
                <Text style={{ fontSize: 25, color: "#152238" }}>
                  Your have scored {Math.round((this.state.correct * 100) / this.props.num)}%
              </Text>
                <Button full onPress={this.onrestartQuiz.bind(this)} >
                  <Text style={{ color: 'white' }}>
                    Start Again
              </Text>
                </Button>
                <Button full onPress={this.onGoBackToDecks.bind(this)} >
                  <Text style={{ color: 'white' }}>
                    Go to Decks
              </Text>
                </Button>
              </View>
            ) : (
              <View style={{ flex: 1, backgroundColor: 'white' }}>
                <QuizMainComponent onAnswerPress={this.onChangeQuestion.bind(this)} questionNum={this.state.currentQuestion} questions={allDecks[currentDeck].questions} />
              </View>
            )
        )
    );
  }
}

const mapStateToProps = (state) => {

  const { currentDeck, allDecks, notificationService } = state;
  const num = allDecks[currentDeck].questions.length;
  return ({
    num,
    currentDeck,
    allDecks,
    notificationService
  })
}

export default connect(mapStateToProps)(QuizComponent);