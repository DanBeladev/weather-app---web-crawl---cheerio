import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import CityCard from './CityCard';
import FullLoaderPage from './FullLoaderPage';

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
  const cities = useSelector((state) => state.app.cities);
  return (
    <div className={classes.container}>
      {cities.length > 0 ? (
        cities.map((city, index) => {
          return <CityCard city={city} key={index} />;
        })
      ) : (
        <FullLoaderPage />
      )}
    </div>
  );
};

export default CitiesList;
