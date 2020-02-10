

export default (state = null, action) => {
  switch (action.type) {

    case "notificationService":
      return action.payload


    default:
      return state;

  }

}