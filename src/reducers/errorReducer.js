import { WRITE_ERROR, WRITE_SUCCESS } from '../actions/types';

const initialState = {
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case WRITE_ERROR:
      return {
        ...state,
        message: `Error: ${action.payload} not found, try again with valid input.
          e.g New-York USA`,
      };
    case WRITE_SUCCESS:
      return {
        ...state,
        message: `Great!! ${action.payload} was added successfully`,
      };
    default:
      return state;
  }
};
