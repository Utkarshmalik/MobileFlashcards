export default (state = false, action) => {
  switch (action.type) {

    case "addNewDeck":
      return true

    default:
      return state;

  }

}