import { combineReducers } from 'redux';
import appReducer from './appReducer';
import searchReducer from './searchReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  app: appReducer,
  search: searchReducer,
  messages: errorReducer,
});
