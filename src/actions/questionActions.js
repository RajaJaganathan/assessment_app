import { FETCHED_QUESTIONS } from './actionTypes';

export const fetchedQuestions = questions => {
  return {
    type: FETCHED_QUESTIONS,
    questions
  };
};

export function fetchQuestions() {
    return {
      type:'FETCH_QUESTIONS',
      payload: fetch("/api/v1/questions", {credentials: "include"})
          .then(status)
          .then(res => res.json())
          .catch(error => {
              return Promise.reject()
          })
    };
}

function status(res) {
  if (!res.ok) {
      throw new Error(res.statusText);
  }
  return res;
}

// Thunk way to handle Async actions

// export function fetchQuestions() {
//   return function(dispatch) {
//     return fetch("/api/v1/questions", {
//       credentials: "include"
//     }).then(res => {
//       if (res.ok) {
//         return res.json().then(questions => {
//           dispatch(fetchedQuestions(questions));
//         });
//       }
//     });
//   };
// }
