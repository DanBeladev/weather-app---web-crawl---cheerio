import {
  ADD_CITY,
  WRITE_SUCCESS,
  SET_CITIES,
  SHOW_LOADER,
  HIDE_LOADER,
  WRITE_ERROR,
} from './types';
import { getWeatherData } from '../services/backendService';

export const addCityAction = (city) => async (dispatch) => {
  try {
    const res = await getWeatherData(city);
    dispatch({ type: ADD_CITY, payload: res });
    dispatch({ type: WRITE_SUCCESS, payload: city });
  } catch (error) {
    dispatch({ type: WRITE_ERROR, payload: city });
  }
};

export const setCitiesAction = (cities) => async (dispatch) => {
  if (cities.length === 0) return;
  const citiesData = [];
  cities.forEach(async (location) => {
    const res = await getWeatherData(`${location.city} ${location.country}`);
    citiesData.push(res);
  });
  dispatch({ type: SET_CITIES, payload: citiesData });
};

export const showLoaderAction = () => (dispatch) => {
  dispatch({ type: SHOW_LOADER });
};

export const hideLoaderAction = () => (dispatch) => {
  dispatch({ type: HIDE_LOADER });
};
