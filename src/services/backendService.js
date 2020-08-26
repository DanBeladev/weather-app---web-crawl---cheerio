import axios from 'axios';
import { API_URL } from '../constants';

export const getWeatherData = async (locationName) => {
  const array = locationName.split(' ');
  const name = array[0];
  const country_name = array[1];
  const url = `${API_URL}${name}+${country_name}`;
  console.log('in get weather data...before fetching: ');
  const weatherDetails = await sendGetRequest(url, {});
  console.log('in get weather data...the data i fetched: ', weatherDetails);
  return weatherDetails;
};

// Private functions
const sendGetRequest = async (url, errResponse) => {
  try {
      console.log('in axios: url:',url);
      
    const res = await axios.get(url);
    console.log('in axios res is: ',res);
    return res.data;
  } catch (error) {
      console.log(`in axios was error in request to ${url}`, error);
    return errResponse;
  }
};

// const sendGetRequest = async (url, errResponse) => {
//   return axios
//     .get(url)
//     .then((res) => {
//       console.log(res);
//       return res.data;
//     })
//     .catch((err) => console.log(err));
// };
