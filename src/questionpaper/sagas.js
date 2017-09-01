import { takeEvery, fork, take, call, put, all } from 'redux-saga/effects';

import ActionTypes from './action-types';
import QuestionPapersApi from './api';

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

function* questionPaperSaga() {
  yield all([
    fork(takeEvery, ActionTypes.FETCH_ALL_QUESTION_PAPERS_REQUEST, fetchAll),
    fork(takeEvery, ActionTypes.CREATE_QUESTION_PAPER_REQUEST, createQuestionPaper),
  ]);
}

export default questionPaperSaga;
