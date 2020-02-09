import { combineReducers } from 'redux';
import AllDecksReducer from './AllDecksReducer';
import CurrentDeckReducer from './currentDeckReducer';

export default combineReducers({
  allDecks: AllDecksReducer,
  currentDeck: CurrentDeckReducer
})
