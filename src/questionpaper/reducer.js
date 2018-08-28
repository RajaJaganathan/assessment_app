import ActionTypes from './action-types';

const INITIAL_STATE = {
  questionPapers: [],
  questions: [],
  selectedTag: 'all',
  modalQuestions: [],
  modalQuestionBanks: [],
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
        questionPapers: [...state.questionPapers, action.payload.questionPaper],
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
      
      case ActionTypes.FETCH_QUESTION_BY_QP_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.FETCH_QUESTION_BY_QP_SUCCESS:
      return {
        ...state,
        questions: [...action.payload.questions],
        isFetching: false
      };
    case ActionTypes.FETCH_QUESTION_BY_QP_FAILURE:
      return {
        ...state,
        isFetching: false
      };
       
    case ActionTypes.ADD_QUESTION_TAG_CHANGE:
      return {
        ...state,
        selectedTag: action.selectedTag,
      };
    case ActionTypes.FETCH_ALL_QUESTION_BANK_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.FETCH_ALL_QUESTION_BANK_SUCCESS:
      return {
        ...state,
        modalQuestionBanks: [...action.payload.questionBanks],
        isFetching: false
      };
    case ActionTypes.FETCH_ALL_QUESTION_BANK_FAILURE:
      return {
        ...state,
        isFetching: false
      };

    default:
      return state;
  }
}
