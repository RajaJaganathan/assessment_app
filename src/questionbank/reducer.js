import ActionTypes from './action-types';

const INITIAL_STATE = {
  questionBanks: [],
  currentQuestionBankId: '',
  questions: [],
  isFetching: false,
  error: null,
};

export default function questionBank(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_QUESTION_BANK_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.FETCH_ALL_QUESTION_BANK_SUCCESS:
      return {
        ...state,
        questionBanks: [
          ...state.questionBanks,
          ...action.payload.questionBanks,
        ],
        isFetching: false,
        error: null,
      };
    case ActionTypes.FETCH_ALL_QUESTION_BANK_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case ActionTypes.FETCH_ALL_QUESTIONS_BY_QUESTION_BANK_SUCCESS:
      return {
        ...state,
        questions: [...action.payload.questions],
        isFetching: false,
        error: null,
      };
    case ActionTypes.CREATE_QUESTION_BY_QUESTION_BANK_SUCCESS:
      return {
        ...state,
        questions: [...state.questions, ...action.payload.question],
        isFetching: false,
        error: null,
      };

    default:
      return state;
  }
}
