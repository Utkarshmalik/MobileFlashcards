
import AsyncStorage from '@react-native-community/async-storage';

const intialDecks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}


export const currentDeckChange = (newDeck) => {
  return ({
    type: 'currentDeckChange',
    payload: newDeck
  })

}



export const addNewDeck = (newDeckTitle) => {
  const newDeck = {
    title: newDeckTitle,
    questions: []
  }

  return (dispatch) => {
    dispatch({
      type: "addNewDeck",
      payload: { key: newDeckTitle, deck: newDeck }
    })

    //now made changes in async storage

    AsyncStorage.getItem('decks').then(
      data => JSON.parse(data))
      .then(data => {
        AsyncStorage.setItem("decks", JSON.stringify({ ...data, [newDeckTitle]: newDeck }))
      })
  }
}


export const addCardToDeck = (deck, card) => {


  return (dispatch) => {
    dispatch({
      type: "addCardToDeck",
      payload: { deck, card }
    })

    //now made changes in async storage

    AsyncStorage.getItem('decks').then(
      data => JSON.parse(data))
      .then(data => {

        const updatedDecks = {
          ...data,
          [deck]: {
            ...data[deck],
            questions: [
              ...data[deck]['questions'], card
            ]
          }
        }

        AsyncStorage.setItem("decks", JSON.stringify(updatedDecks))
      })
  }

}


export const getDecksFromStorage = () => {
  return (dispatch) => {
    AsyncStorage.getItem("decks").
      then(data => {

        if (data === null) {
          // add initial data to storage

          dispatch({ type: "getDecksFromStorage", payload: intialDecks });
          AsyncStorage.setItem("decks", JSON.stringify(intialDecks))
            .catch(err => console.log(err))


        }
        else {
          AsyncStorage.getItem('decks')
            .then(data => dispatch({ type: "getDecksFromStorage", payload: JSON.parse(data) }))
        }
      })
  }
}

export const saveNotificationService = (service) => {
  return ({
    type: "notificationService",
    payload: service
  })
}


export const markDeckAdded = () => {

  return (dispatch) => {
    dispatch({
      type: "deckAdded"
    })
  }
}
