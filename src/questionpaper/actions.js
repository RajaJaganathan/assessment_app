import ActionTypes from './action-types';

export function fetchAllQuestionPapers() {
  return {
    type: ActionTypes.FETCH_ALL_QUESTION_PAPERS_REQUEST,
  };
}

export function createQuestionPaper() {
  return {
    type: 'CREATE_QUESTION_PAPER_REQUEST',
    title: 'payload.title',
    desc: 'payload.desc',
  };
}
