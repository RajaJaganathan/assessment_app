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
    questionBankId
  };
}
