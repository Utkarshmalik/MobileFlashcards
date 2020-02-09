
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
  console.log(deck)
  console.log(card)
}