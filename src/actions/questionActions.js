export const questionLoadedActions = questions => {
  return {
    type: "QUESTION_LOADED",
    questions
  };
};

export function loadQuestions() {
  return function(dispatch) {
    return fetch("api/v1/questions", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(questions => {
        dispatch(questionLoadedActions(questions));
      })
      .catch(error => {
        console.error(error);
      });
  };
}

