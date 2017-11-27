import { takeEvery, fork, take, call, put, all } from 'redux-saga/effects';

import ActionTypes from './action-types';
import QuestionBankApi from './api';

function* fetchAll(payload) {
  try {
    const response = yield call(QuestionBankApi.fetchAll);
    yield put({
      type: ActionTypes.FETCH_ALL_QUESTION_BANK_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: ActionTypes.FETCH_ALL_QUESTION_BANK_FAILURE,
      error,
    });
  }
}

function* fetchQuestionsById(payload) {
  try {
    const response = yield call(
      QuestionBankApi.fetchQuestionsById,
      payload.questionBankId,
    );
    yield put({
      type: ActionTypes.FETCH_ALL_QUESTIONS_BY_QUESTION_BANK_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: ActionTypes.FETCH_ALL_QUESTIONS_BY_QUESTION_BANK_FAILURE,
      error,
    });
  }
}

function* createQuestionsById(action) {
  try {
    const response = yield call(QuestionBankApi.createQuestionsById, action.payload);
    yield put({
      type: ActionTypes.CREATE_QUESTION_BY_QUESTION_BANK_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: ActionTypes.CREATE_QUESTION_BY_QUESTION_BANK_FAILURE,
      error,
    });
  }
}

function* createQuestionsBank(action) {
  try {
    const response = yield call(QuestionBankApi.createQuestionBank, action.payload);
    yield put({
      type: ActionTypes.CREATE_QUESTION_BANK_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: ActionTypes.CREATE_QUESTION_BANK_FAILURE,
      error,
    });
  }
}

function* deleteQuestionsFromQB(action) {
  try {
    const response = yield call(QuestionBankApi.deleteQuestionFromQB, action.payload);
    yield put({
      type: ActionTypes.DELETE_QUESTION_FROM_QB_SUCCESS,
      payload: action.payload
    });
  } catch (error) {
    yield put({
      type: ActionTypes.DELETE_QUESTION_FROM_QB_FAILURE,
      error
    });
  }
}

function* questionBankSaga() {
  yield all([
    fork(takeEvery, ActionTypes.FETCH_ALL_QUESTION_BANK_REQUEST, fetchAll),
    fork(takeEvery, ActionTypes.FETCH_ALL_QUESTIONS_BY_QUESTION_BANK_REQUEST, fetchQuestionsById),
    fork(takeEvery, ActionTypes.CREATE_QUESTION_BY_QUESTION_BANK_REQUEST, createQuestionsById),
    fork(takeEvery, ActionTypes.CREATE_QUESTION_BANK_REQUEST, createQuestionsBank),
    fork(takeEvery, ActionTypes.DELETE_QUESTION_FROM_QB_REQUEST, deleteQuestionsFromQB)
  ]);
};

export default questionBankSaga;
