import { ADD_CITY, SET_CITIES } from './types';
// import { getPayload, fetchLocationData } from '../mocks/cities';
import { getWeatherData } from '../services/backendService';

export const addCityAction =  (city) => async (dispatch) => {
  console.log('going to add location: ', city);
  const res = await getWeatherData(city);
  console.log('in client res from server: ' , res);
  dispatch({ type: ADD_CITY, payload: res });
};

export const setCitiesAction = (cities) => async (dispatch) => {
  console.log('in set action')
  const citiesData = [];
  cities.forEach(async (location) => 
  {
    console.log('before: ');
    const res = await getWeatherData(`${location.city} ${location.country}`);
    console.log('res from server: ',res);
    citiesData.push(res)
  }
  );
  console.log('data: ',citiesData);
  
  dispatch({ type: SET_CITIES, payload: [...citiesData] });
};
