import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  temp: {
    fontSize: 22  ,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  icon: {
    height: 100,
    width:"100%"
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'cursive',
    textAlign: 'center',
    margin: 10,
    marginTop: 30,
  },
});

const CityCard = (props) => {
  const {
    city,
    country,
    description,
    humidity,
    image,
    temperature,
    wind,
  } = props.city;
  
  const classes = useStyles();
  const cardStyle = {minWidth: 180, maxWidth: 300, margin: 10 };
  const cityStyle = {fontWeight:'bold' };
  const countryStyle = {fontWeight:'bold', marginBottom:20}
  return (
    <div
      className='card blue-grey darken-1 col-xs-12 col-sm-6'
      style={cardStyle}
    >
      <div className='card-content white-text'>
        <div className='card-title' style={cityStyle}>{city}</div>
        <div className='card-secondary' style={countryStyle}>{country}</div>
        <div className={classes.temp}>
          <p>{temperature}</p>
        </div>
        <div className={classes.description}>{description}</div>
        <img src={image} alt='' className={classes.icon} />
        <div className={classes.description}>{humidity}</div>
        <div className={classes.description}>{wind}</div>
      </div>
    </div>
  );
};

export default CityCard;
