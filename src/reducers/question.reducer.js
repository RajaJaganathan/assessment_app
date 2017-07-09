export default (state = {}, action) => {
  switch (action.type) {
    case "QUESTION_LOADED":
      return {
        ...state,
        loggedIn: true
      };
    default:
      return state;
  }
};
