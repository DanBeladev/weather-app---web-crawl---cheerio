const express = require('express');
const bodyParser = require('body-parser');
// const pino = require('express-pino-logger')();
const cheerio = require('cheerio');
const request = require('request');
const cors = require('cors');
const WEATHER_URL = 'https://www.timeanddate.com/weather/';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(pino);
app.use(cors());
app.get('/ping',(req, res)=>{res.json({result:'pong'})});
app.get('/moveo-webcrawl/:location', (req, res) => {
  const location = req.params.location;
  const splittedLocationArray = location.split('+');
  console.log('in server- array',splittedLocationArray);
  
  const cityName = splittedLocationArray[0];
  const country = splittedLocationArray[1];
  console.log(cityName, country);
  const url = `${WEATHER_URL}/${country}/${cityName}`;
  request(url, (error, response, html)=>{
    if(!error){
        let weatherDetails = {};
        weatherDetails.city = cityName;
        weatherDetails.country = country;
        const $ = cheerio.load(html);
        let imageSrc = $('#cur-weather').attr('src');
        weatherDetails.image= imageSrc;
        $('#qlook').each((i,el) => {
            let temperature = $(el).find('div.h2').text();
            let description = $(el).find('p').first().text();
            let wind = $(el).find('br.clear').next().text().split('Wind')[1];
            weatherDetails.temperature= temperature;
            weatherDetails.description= description;
            weatherDetails.wind= wind;
          });
          $('.bk-focus__info').each((i, el)=> {
              let humidity = $(el).find('tr').last().prev().find('td').text();
              weatherDetails.humidity = humidity;
          });
          console.log('weather details from server: ',weatherDetails);
          res.status(200).json(weatherDetails);
    }
    else{
        res.status(401).json('Location not found, try valid input!');
    }
  })
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);


// http://localhost:3001/moveo-webcrawl/Tel-Aviv%20Israel