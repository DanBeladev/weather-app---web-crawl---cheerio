import {
    UPDATE_SEARCH_RESULTS,
  } from '../actions/types';
  
  const initialState = {
    input: '',
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_SEARCH_RESULTS:
        return {
          ...state,
          searchResults: action.payload,
        };

      default:
        return state;
    }
  };