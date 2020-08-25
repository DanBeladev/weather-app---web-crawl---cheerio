import { ADD_CITY, SET_CITIES } from './types';
import { getPayload, fetchLocationData } from '../mocks/cities';

export const addCityAction = (city) => (dispatch) => {
  const res = getPayload(city);
  console.log(res);
  dispatch({ type: ADD_CITY, payload: res });
};

//   export const setCitiesAction = (cities) => (dispatch) => {
//       dispatch({type: SET_CITIES, payload: [...getCitiesData()]});
//   }
export const setCitiesAction = (cities) => (dispatch) => {
  const citiesData = [];
  cities.forEach((location) =>
    citiesData.push(fetchLocationData(`${location.city} ${location.country}`))
  );
  dispatch({ type: SET_CITIES, payload: [...citiesData] });
};

export const webCrawlMockAction = (location) => (dispatch) => {
  const res = getPayload(location);
  dispatch({ type: ADD_CITY, payload: res });
};
