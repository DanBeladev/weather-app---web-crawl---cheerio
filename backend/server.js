// import app from './app';

// const port = process.env.PORT || '3001';

// app.listen(port, () => {
//     console.log(`Server is up and listening on port: ${port}`);
// });

// console.log(`Listening on port ${port}`);

/////////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cheerio = require('cheerio');
const request = require('request');
const { WEATHER_URL } = require('../src/constants');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/moveo-webcrawl/:location', (req, res) => {
  const location = req.params.location;
  const splittedLocationArray = location.split(' ');
  const cityName = splittedLocationArray[0];
  const country = splittedLocationArray[1];
  const url = `${WEATHER_URL}/${country}/${cityName}`;
  request(url, (error, response, html)=>{
    if(!error){
        let weatherDetails = {};
        const $ = cheerio.load(html);
        let imageSrc = $('#cur-weather').attr('src');
        weatherDetails.image= imageSrc;
        // console.log(imageSrc);  
        $('#qlook').each((i,el) => {
            let temperature = $(el).find('div.h2').text();
            let description = $(el).find('p').first().text();
            let wind = $(el).find('br.clear').next().text().split('Wind')[1];
            weatherDetails.temperature= temperature;
            weatherDetails.description= description;
            weatherDetails.wind= wind;

            // console.log('des:',description);
            // console.log('temp:',temperature);
            // console.log('wind:',wind);
          });


          $('.bk-focus__info').each((i, el)=> {
              let humidity = $(el).find('tr').last().prev().find('td').text();
            //   console.log(humidity);
              weatherDetails.humidity = humidity;
          });
          console.log(weatherDetails);
          res.json(weatherDetails);
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