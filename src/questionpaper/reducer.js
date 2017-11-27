import ActionTypes from './action-types';

const INITIAL_STATE = {
  questionPapers: [],
  questions: [],
  selectedTag: 'all',
  isFetching: false,
  error: null,
};

export default function questionPaper(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_QUESTION_PAPERS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case ActionTypes.FETCH_ALL_QUESTION_PAPERS_SUCCESS:
      return {
        ...state,
        questionPapers: [...action.payload.questionPapers],
        isFetching: false,
        error: null,
      };
    case ActionTypes.FETCH_ALL_QUESTION_PAPERS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case ActionTypes.CREATE_QUESTION_PAPER_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case ActionTypes.CREATE_QUESTION_PAPER_SUCCESS:
      return {
        ...state,
        questionPapers: [...state.questionPapers, action.payload],
        isFetching: false,
        error: null,
      };
    case ActionTypes.CREATE_QUESTION_PAPER_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case ActionTypes.FETCH_QUESTION_BY_QB_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case ActionTypes.FETCH_QUESTION_BY_QB_SUCCESS:
      return {
        ...state,
        questions: action.payload.questions,
        isFetching: false,
        error: null,
      };
    case ActionTypes.FETCH_QUESTION_BY_QB_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case ActionTypes.ADD_QUESTION_TAG_CHANGE:
      return {
        ...state,
        selectedTag: action.selectedTag,
      };

    default:
      return state;
  }
}
