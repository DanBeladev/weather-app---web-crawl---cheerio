import { ADD_CITY, SET_CITIES, SHOW_LOADER, HIDE_LOADER } from './types';
import { getWeatherData } from '../services/backendService';

export const addCityAction =  (city) => async (dispatch) => {
  const res = await getWeatherData(city);
  dispatch({ type: ADD_CITY, payload: res });
};

export const setCitiesAction = (cities) => async (dispatch) => {
  if (cities.length === 0) return;
  const citiesData = [];
  cities.forEach(async (location) => 
  {
    const res = await getWeatherData(`${location.city} ${location.country}`);
    citiesData.push(res);
  }
  );
  dispatch({ type: SET_CITIES, payload: citiesData });
};

export const showLoaderAction = () => (dispatch) => {
  dispatch({ type: SHOW_LOADER});
};

export const hideLoaderAction = () => (dispatch) => {
  dispatch({ type: HIDE_LOADER});
};
