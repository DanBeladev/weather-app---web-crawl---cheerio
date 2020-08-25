import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    height: 370,
    background: 'lightslategray',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  temp: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  icon: {
    width: 100,
    height: 100,
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'cursive',
    textAlign: 'center',
    margin: 10,
    marginTop: 30,
  },
  pos: {
    marginBottom: 12,
  },
});

const CityCard = (props) => {
  const classes = useStyles();
  return (
    <div
      className='card blue-grey darken-1 col-xs-12 col-sm-6'
      style={{ minWidth: 180, maxWidth: 350, margin: 10 }}
    >
      <div className='card-content white-text'>
        <div className='card-title'>{props.city.city}</div>
        <div className='card-secondary'>{props.city.country}</div>
        <div className={classes.temp}>
          <p>
            {Math.floor(Math.random() * Math.floor(100))}
            <i>° C</i>
          </p>
        </div>
        <img src={require('../assets/celsius.png')} alt='' className={classes.icon} />
        <div className={classes.description}>{props.city.humidity}</div>
        <div className={classes.description}>{props.city.windSpeed}</div>
      </div>
    </div>
  );
};

export default CityCard;
