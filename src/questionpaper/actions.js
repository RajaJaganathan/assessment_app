import ActionTypes from './action-types';

export function fetchAllQuestionPapers() {
  return {
    type: ActionTypes.FETCH_ALL_QUESTION_PAPERS_REQUEST,
  };
}

export function createQuestionPaper({ title, desc }) {
  return {
    type: ActionTypes.CREATE_QUESTION_PAPER_REQUEST,
    title,
    desc,
  };
}

export function fetchQuestionsByQuestionBank(questionBankId) {
  return {
    type: ActionTypes.FETCH_QUESTION_BY_QB_REQUEST,
    questionBankId,
  };
}

export function addQuestionTagChange(selectedTag) {
  return {
    type: ActionTypes.ADD_QUESTION_TAG_CHANGE,
    selectedTag
  };
}

export function fetchAllQuestionBanks() {
  return {
    type: ActionTypes.FETCH_ALL_QUESTION_BANK_REQUEST
  };
}

export const addQuestions = payload => ({
  type: ActionTypes.ADD_QUESTIONS_TO_QP_REQUEST,
  payload
});

export const fetchQuestionByQP = (payload) => ({
  type: ActionTypes.FETCH_QUESTION_BY_QP_REQUEST,
  payload
});
