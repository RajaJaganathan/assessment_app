import { combineReducers } from 'redux';

import authReducer from '../login/reducer';
import questionReducer from './question.reducer';
import questionPapersReducer from '../questionpaper/reducer';



const rootReducers = combineReducers({
  auth: authReducer,
  question: questionReducer,
  questionPapers: questionPapersReducer,
});

export default rootReducers;
