export const questionLoadedActions = questions => {
  return {
    type: "QUESTION_LOADED",
    questions
  };
};

export function loadQuestions() {
  return function(dispatch) {
    return fetch("/api/v1/questions", {
      credentials: "include"
    })
      .then(res => {
        if(res.ok){
           return res.json().then(questions => {
            dispatch(questionLoadedActions(questions));
          });
        }
      });
  };
}

