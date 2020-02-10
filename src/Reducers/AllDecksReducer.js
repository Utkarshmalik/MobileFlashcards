

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



export default (state ={}, action) => {
  switch (action.type) {


    case "getDecksFromStorage":
    {
      console.log("yes "+action.payload)

      return action.payload;
    }

    case "addNewDeck":
      {
        const key = action.payload.key;
        const deck = action.payload.deck;

        return (
          { ...state, [key]: deck }
        )
      }

    case "addCardToDeck":
      {
        console.log(state)

        const { deck, card } = action.payload;

        return ({
          ...state,
          [deck]: {
            ...state[deck],
            questions: [
              ...state[deck]['questions'], card
            ]
          }
        })

        return ({
          ...state,
          [deck]: {
            ...state[deck],
            questions: {
              ...state[deck]['questions'], card
            }
          }
        })
      }

    default:
      return state;

  }

}