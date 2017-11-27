import { zipObject } from 'lodash';

const actions = [
  'FETCH_ALL_QUESTION_BANK_REQUEST',
  'FETCH_ALL_QUESTION_BANK_SUCCESS',
  'FETCH_ALL_QUESTION_BANK_FAILURE',

  'FETCH_ALL_QUESTIONS_BY_QUESTION_BANK_REQUEST',
  'FETCH_ALL_QUESTIONS_BY_QUESTION_BANK_SUCCESS',
  'FETCH_ALL_QUESTIONS_BY_QUESTION_BANK_FAILURE',

  'CREATE_QUESTION_BY_QUESTION_BANK_REQUEST',
  'CREATE_QUESTION_BY_QUESTION_BANK_SUCCESS',
  'CREATE_QUESTION_BY_QUESTION_BANK_FAILURE',
   
  'CREATE_QUESTION_BANK_REQUEST',
  'CREATE_QUESTION_BANK_SUCCESS',
  'CREATE_QUESTION_BANK_FAILURE',
  
  'DELETE_QUESTION_FROM_QB_REQUEST',
  'DELETE_QUESTION_FROM_QB_SUCCESS',
  'DELETE_QUESTION_FROM_QB_FAILURE'
];

export default zipObject(actions, actions);
