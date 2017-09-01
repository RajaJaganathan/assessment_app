// import { schema, normalize } from 'normalizr';

// const questionsSchema = new schema.Entity('questions');
// const optionsSchema = new schema.Entity('options');

// const questionsListSchema = new schema.Array(questionsSchema);
//   console.log(
//     `Normalizr data: `,
//     normalize(action.payload.questions, questionsListSchema));

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const ADD_QUESTIONS = 'ADD_QUESTIONS';
export const EDIT_QUESTIONS = 'EDIT_QUESTIONS';

export const FETCH_QUESTIONS_FULFILLED = 'FETCH_QUESTIONS_FULFILLED';
export const FETCH_QUESTIONS_REJECTED = 'FETCH_QUESTIONS_REJECTED';

/* eslint-disable import/prefer-default-export */
export const fetchQuestions = () => ({
  type: FETCH_QUESTIONS,
  url: '/api/v1/questions',
  payload: null,
});

export const addQuestions = payload => ({
  type: ADD_QUESTIONS,
  payload,
});

export const editQuestions = payload => ({
  type: EDIT_QUESTIONS,
  payload,
});

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_FULFILLED:
      return {
        ...state,
        questions: action.payload.questions,
      };
    case ADD_QUESTIONS:
      return [...state, action.payload];
    case EDIT_QUESTIONS: {
      const { selectedQuestion, newQuestion } = action.payload;

      return state.questions.map(item => {
        if (selectedQuestion === item) {
          return {
            ...item,
            ...newQuestion,
          };
        }
        return item;
      });
    }
    default:
      return state;
  }
};
