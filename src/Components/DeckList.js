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
    const { allDecks } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <FlatList
          data={Object.keys(allDecks)}
          renderItem={({ item }) => <DeckMainComponent deck={allDecks[item]} navigation={this.props.navigation} dispatch={this.props.dispatch} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return ({
    allDecks: state.allDecks
  })
}

export default connect(mapStateToProps)(DeckList);