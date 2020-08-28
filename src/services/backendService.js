import axios from 'axios';
import { API_URL } from '../constants';

export const getWeatherData = async (locationName) => {
  const array = locationName.split(' ');
  const name = array[0];
  const country_name = array[1];
  const url = `${API_URL}${name}+${country_name}`;
  const weatherDetails = await sendGetRequest(url, {});
  return weatherDetails;
};

// Private functions
const sendGetRequest = async (url, errResponse) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(`in axios was error in request to ${url}`, error);
    return errResponse;
  }
};
