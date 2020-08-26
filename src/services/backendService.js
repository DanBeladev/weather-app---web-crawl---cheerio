import axios from 'axios';
import { WEATHER_URL } from '../constants';

export const getWeatherData = async (locationName) => {
    const array = locationName.split(' ');
    const name = array[0];
    const country_name = array[1];
    const url = `${WEATHER_URL}${name} ${country_name}`;
    const weatherDetails = await sendGetRequest(url, {});
    console.log(weatherDetails);
    return weatherDetails;
  };


// Private functions
const sendGetRequest = async (url, errResponse) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return errResponse;
  }
};
