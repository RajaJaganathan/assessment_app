export default (state = {}, action) => {
  switch (action.type) {
    case "QUESTION_LOADED":
      return {
        ...state,
        questions: action.questions
      }
    default:
      return state;
  }
};
