import { combineReducers } from 'redux';
import productsReducer from './products.reducer';
import authenticationReducer from './authentication.reducers';

const rootReducers = combineReducers({
  authenticationResponse: authenticationReducer,
  productsResponse: productsReducer
});

export default rootReducers;
