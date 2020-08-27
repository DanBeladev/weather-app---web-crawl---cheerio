import { SHOW_LOADER, ADD_CITY, SET_CITIES } from "../actions/types";
  
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
              console.log('payload: ', action.payload);              
                return {
                  ...state,
                  cities: [...action.payload],
                };
        case SHOW_LOADER:
          return {
            ...state,
            loading: true,
          };
      default:
        return state;
    }
  };
  