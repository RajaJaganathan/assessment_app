import { combineReducers } from 'redux';

import authReducer from '../login/reducer';
import questionReducer from './question.reducer';

const rootReducers = combineReducers({
  auth: authReducer,
  question: questionReducer
});

export default rootReducers;
