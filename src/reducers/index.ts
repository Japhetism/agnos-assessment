import { combineReducers } from 'redux';
import questionsReducer from './questions.reducer';

const rootReducers = combineReducers({
  questionsResponse: questionsReducer,
});

export default rootReducers;
