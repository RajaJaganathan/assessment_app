
import ActionTypes from './action-types';

export function fetchAllQuestionBank() {
  return {
    type: ActionTypes.FETCH_ALL_QUESTION_BANK_REQUEST,
  };
}

export function fetchQuestionsById(questionBankId) {
  return {
    type: ActionTypes.FETCH_ALL_QUESTIONS_BY_QUESTION_BANK_REQUEST,
    questionBankId
  };
}

export function createQuestionsById(payload) {
  return {
    type: ActionTypes.CREATE_QUESTION_BY_QUESTION_BANK_REQUEST,
    payload
  };
}

export function createQuestionsBank(payload) {
  return {
    type: ActionTypes.CREATE_QUESTION_BANK_REQUEST,
    payload
  };
}

export function deleteQuestionsFromQB(payload) {
  return {
    type: ActionTypes.DELETE_QUESTION_FROM_QB_REQUEST,
    payload
  };
}
