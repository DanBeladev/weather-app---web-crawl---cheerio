import { SHOW_LOADER, ADD_CITY, SET_CITIES, HIDE_LOADER } from "../actions/types";
  
  const initialState = {
    cities: [],
    loading: false
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
      default:
        return state;
    }
  };
  