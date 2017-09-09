import { combineReducers } from 'redux';

import authReducer from '../login/reducer';
import questionReducer from './question.reducer';
import questionPapersReducer from '../questionpaper/reducer';
import questionBanksReducer from '../questionbank/reducer';

const rootReducers = combineReducers({
  auth: authReducer,
  question: questionReducer,
  questionPapers: questionPapersReducer,
  questionBanks: questionBanksReducer,
});

export default rootReducers;
