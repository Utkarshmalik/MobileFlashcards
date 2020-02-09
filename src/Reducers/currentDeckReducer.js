
const initialState = 'React';

export default (state = initialState, action) => {
  switch (action.type) {

    case "currentDeckChange":
      return action.payload


    default:
      return state;

  }

}