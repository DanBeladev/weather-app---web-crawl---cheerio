import { combineReducers } from 'redux';
import appReducer from './appReducer';
import searchReducer from './searchReducer';


export default combineReducers({
    app: appReducer,
    search: searchReducer,
});