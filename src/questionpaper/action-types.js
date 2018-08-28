import { zipObject } from 'lodash';

const actions = [
  'FETCH_ALL_QUESTION_PAPERS_REQUEST',
  'FETCH_ALL_QUESTION_PAPERS_SUCCESS',
  'FETCH_ALL_QUESTION_PAPERS_FAILURE',

  'CREATE_QUESTION_PAPER_REQUEST',
  'CREATE_QUESTION_PAPER_SUCCESS',
  'CREATE_QUESTION_PAPER_FAILURE',

  'FETCH_QUESTION_BY_QB_REQUEST',
  'FETCH_QUESTION_BY_QB_SUCCESS',
  'FETCH_QUESTION_BY_QB_FAILURE',

  'ADD_QUESTION_TAG_CHANGE',
  
  'FETCH_ALL_QUESTION_BANK_REQUEST',
  'FETCH_ALL_QUESTION_BANK_SUCCESS',
  'FETCH_ALL_QUESTION_BANK_FAILURE',
  
  'ADD_QUESTIONS_TO_QP_REQUEST',
  'ADD_QUESTIONS_TO_QP_SUCCESS',
  'ADD_QUESTIONS_TO_QP_FAILURE',
  
  'FETCH_QUESTION_BY_QP_REQUEST',
  'FETCH_QUESTION_BY_QP_SUCCESS',
  'FETCH_QUESTION_BY_QP_FAILURE'
];

export default zipObject(actions, actions);
