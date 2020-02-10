
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

  console.log(newDeckTitle)


  const newDeck = {
    title: newDeckTitle,
    questions: []
  }

  return ({
    type: "addNewDeck",
    payload: { key: newDeckTitle, deck: newDeck }
  })

}

export const addCardToDeck = (deck, card) => {

  return ({
    type: "addCardToDeck",
    payload: { deck, card }
  })

}


export const getDecksFromStorage = () => {

  console.log("getting decks")

  return (dispatch) => {
    AsyncStorage.getItem("decks").
      then(data => {

        if (data === null) {
          // add initial data to storage

    dispatch({type:"getDecksFromStorage",payload:intialDecks});
    AsyncStorage.setItem("decks", JSON.stringify(intialDecks)).then(
      data=>console.log("data stored")
    )

    }

         else {
          AsyncStorage.getItem('decks')
          .then(data=>dispatch({type:"getDecksFromStorage",payload:JSON.parse(data)}))
        }
      })
  }
}