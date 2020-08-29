import { ADD_CITY, SET_CITIES } from '../actions/types';

const initialState = {
  cities: [],
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
    default:
      return state;
  }
};
