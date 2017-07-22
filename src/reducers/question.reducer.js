export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_QUESTIONS_FULFILLED":
      return {
        ...state,
        questions: action.payload
      }
    default:
      return state;
  }
};
