export default (state = false, action) => {
  switch (action.type) {

    case "addNewDeck":
      return true

    case "addNewDeckDone":
      return false

    default:
      return state;

  }

}