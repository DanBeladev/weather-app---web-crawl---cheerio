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
      console.log('error written: ', action.payload);
      return {
        ...state,
        message: `Was a problem to find ${action.payload}, try city name with '-' and then country. e.g New-York USA`,
      };
      case WRITE_SUCCESS:
        console.log('success written: ', action.payload);
        return {
          ...state,
          message: `Great! ${action.payload} was added successfully`,
        };
    default:
      return state;
  }
};
