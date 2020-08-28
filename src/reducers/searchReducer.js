import { CHANGE_INPUT, CLEAR_INPUT } from '../actions/types';

const initialState = {
  input: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case CLEAR_INPUT:
      return {
        ...state,
        input: action.payload,
      };

    default:
      return state;
  }
};
