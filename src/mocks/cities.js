export const getCitiesData = () => {
  const humidity_rnd = Math.floor(Math.random() * Math.floor(100));
  const wind_rnd = Math.floor(Math.random() * Math.floor(100));
  return [
    {
      city: 'Tel Aviv',
      country: 'Israel',
      temperature: Math.floor(Math.random() * Math.floor(100)),
      humidity: `${humidity_rnd}%`,
      windSpeed: wind_rnd,
    },
    {
      city: 'New York',
      country: 'USA',
      temperature: Math.floor(Math.random() * Math.floor(100)),
      humidity: `${Math.floor(Math.random() * Math.floor(100))}%`,
      windSpeed: Math.floor(Math.random() * Math.floor(200)),
    },
  ];
};

export const getPayload = (location) => {
  const humidity_rnd = Math.floor(Math.random() * Math.floor(100));
  const wind_rnd = Math.floor(Math.random() * Math.floor(100));
  const array = location.split(' ');
  const name = array[0];
  const country_name = array[1];
  const payload = {
    city: name,
    country: country_name,
    temperature: Math.floor(Math.random() * Math.floor(100)),
    humidity: `${humidity_rnd}%`,
    windSpeed: wind_rnd,
  };
  return payload;
};

export const fetchLocationData = (locationString) => {
  const payload = getPayload(locationString);
  return payload;
};

export const cities = [
  {
    city: 'Tel Aviv',
    country: 'Israel',
    temperature: Math.floor(Math.random() * Math.floor(100)),
    humidity: `${Math.floor(Math.random() * Math.floor(100))}%`,
    windSpeed: Math.floor(Math.random() * Math.floor(200)),
  },
  {
    city: 'New York',
    country: 'USA',
    temperature: Math.floor(Math.random() * Math.floor(100)),
    humidity: `${Math.floor(Math.random() * Math.floor(100))}%`,
    windSpeed: Math.floor(Math.random() * Math.floor(200)),
  },
];
