import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import DeckMainComponent from './DeckMainComponent'
import { connect } from 'react-redux';
import { getDecksFromStorage } from '../Actions/index';




class DeckList extends Component {



  componentDidMount() {
    this.props.dispatch(getDecksFromStorage())
  }

  render() {

    if (this.props.deckAdded) {
      this.props.navigation.navigate('deckmain');
    }


    const { allDecks } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <FlatList
          key={item => { allDecks[item].title }}
          data={Object.keys(allDecks)}
          renderItem={({ item }) => <DeckMainComponent deck={allDecks[item]} navigation={this.props.navigation} dispatch={this.props.dispatch} />}
          keyExtractor={item => { return (allDecks[item].title) }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    allDecks: state.allDecks,
    deckAdded: state.deckAdded
  })
}

export default connect(mapStateToProps)(DeckList);