import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import CityCard from './CityCard';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  empty: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 60,
    fontWeight: 800,
  },
}));

const CitiesList = () => {
  const classes = useStyles();
  const cities = useSelector(state => state.app.cities);
  console.log('citiesList: ',cities);
  return(
    <div className={classes.container}>
     {cities.length >0 ? cities.map((city, index) => {
        return <CityCard city={city} key={index} />;
      }): <div>Empty Locations List</div>}
    </div>
  )
};

export default CitiesList;
