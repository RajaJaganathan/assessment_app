function status(res) {
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res;
}

/* eslint-disable import/prefer-default-export */
export function fetchQuestions() {
  return {
    type: 'FETCH_QUESTIONS',
    payload: fetch('/api/v1/questions', { credentials: 'include' })
      .then(status)
      .then(res => res.json())
      .catch(() => Promise.reject())
  };
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
