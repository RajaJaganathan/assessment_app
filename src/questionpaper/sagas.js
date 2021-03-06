import { takeEvery, fork, take, call, put, all } from 'redux-saga/effects';

import ActionTypes from './action-types';
import QuestionPapersApi from './api';
import QuestionBanksApi from '../questionbank/api';

function* fetchAll() {
  try {
    const payload = yield call(QuestionPapersApi.fetchAll);
    yield put({
      type: ActionTypes.FETCH_ALL_QUESTION_PAPERS_SUCCESS,
      payload,
    });
  } catch (error) {
    yield put({
      type: ActionTypes.FETCH_ALL_QUESTION_PAPERS_FAILURE,
      error,
    });
  }
}

function* createQuestionPaper({ title, desc }) {
  try {
    const payload = yield call(QuestionPapersApi.createQuestionPaper, {
      title,
      desc,
    });
    yield put({
      type: ActionTypes.CREATE_QUESTION_PAPER_SUCCESS,
      payload,
    });
  } catch (error) {
    yield put({
      type: ActionTypes.CREATE_QUESTION_PAPER_FAILURE,
      error,
    });
  }
}

function* fetchQuestionPaperByQuestionBank({ questionBankId }) {
  try {
    const payload = yield call(QuestionPapersApi.fetchQuestionPaperByQuestionBank, questionBankId);
    yield put({ type: ActionTypes.FETCH_QUESTION_BY_QB_SUCCESS, payload });
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_QUESTION_BY_QB_FAILURE, error });
  }
}

function* fetchAllQuestionBank() {
  try {
    const payload = yield call(QuestionPapersApi.QuestionBanksApi);
    yield put({ type: ActionTypes.FETCH_ALL_QUESTION_BANK_SUCCESS, payload });
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_ALL_QUESTION_BANK_FAILURE, error });
  }
}

function* fetchQuestionByQP(req) {  
  try {
    const payload = yield call(QuestionPapersApi.fetchQuestionByQP, req.payload.questionPaperId);
    yield put({ type: ActionTypes.FETCH_QUESTION_BY_QP_SUCCESS, payload });
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_QUESTION_BY_QP_FAILURE, error });
  }
}

function* questionPaperSaga() {
  yield all([
    fork(takeEvery, ActionTypes.FETCH_ALL_QUESTION_PAPERS_REQUEST, fetchAll),
    fork(takeEvery, ActionTypes.CREATE_QUESTION_PAPER_REQUEST, createQuestionPaper),
    fork(takeEvery, ActionTypes.FETCH_QUESTION_BY_QB_REQUEST, fetchQuestionPaperByQuestionBank),
    fork(takeEvery, ActionTypes.FETCH_QUESTION_BY_QP_REQUEST, fetchQuestionByQP),
    fork(takeEvery, ActionTypes.FETCH_ALL_QUESTION_BANK_REQUEST, fetchAllQuestionBank)
  ]);
}

export default questionPaperSaga;
