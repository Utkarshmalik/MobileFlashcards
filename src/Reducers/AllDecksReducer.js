const initialState = {
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




export default (state = initialState, action) => {
  switch (action.type) {

    case "addNewDeck":
      {
        const key = action.payload.key;
        const deck = action.payload.deck;

        return (
          { ...state, [key]: deck }
        )
      }

    default:
      return state;

  }

}