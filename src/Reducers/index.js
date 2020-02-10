import { combineReducers } from 'redux';
import AllDecksReducer from './AllDecksReducer';
import CurrentDeckReducer from './currentDeckReducer';
import NotificationServiceReducer from './notificationServiceReducer'

export default combineReducers({
  allDecks: AllDecksReducer,
  currentDeck: CurrentDeckReducer,
  notificationService: NotificationServiceReducer
})
