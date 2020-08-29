import {
  SHOW_LOADER,
  ADD_CITY,
  SET_CITIES,
  HIDE_LOADER,
  WRITE_ERROR,
  WRITE_SUCCESS
} from '../actions/types';

const initialState = {
  cities: [],
  loading: false,
  message: '',

};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };
    case SET_CITIES:
      return {
        ...state,
        cities: [...action.payload],
      };
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
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
