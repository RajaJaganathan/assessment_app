export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const ADD_QUESTIONS = 'ADD_QUESTIONS';
export const FETCH_QUESTIONS_FULFILLED = 'FETCH_QUESTIONS_FULFILLED';
export const FETCH_QUESTIONS_REJECTED = 'FETCH_QUESTIONS_REJECTED';

/* eslint-disable import/prefer-default-export */
export const fetchQuestions = () => ({
  type: FETCH_QUESTIONS,
  url: '/api/v1/questions',
  payload: null
});

export const addQuestions = payload => ({
  type: ADD_QUESTIONS,
  payload,
});


export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_FULFILLED:
      return {
        ...state,
        questions: action.payload
      };
      case ADD_QUESTIONS:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};
