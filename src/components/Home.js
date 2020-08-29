import React, { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import Search from './Search';
import CitiesList from './CitiesList';
import { useSelector, useDispatch } from 'react-redux';
import { setCitiesAction, addCityAction } from '../actions/appActions';
import { TEL_AVIV, MADRID } from '../constants';

const Home = (props) => {
  const cities = useSelector((state) => state.app.cities);
  const dispatch = useDispatch();
  const fetchCities = () => dispatch(setCitiesAction(cities));
  const addCity = (location) => dispatch(addCityAction(location));

  useEffect(() => {
    if (cities.length === 0) {
      addCity(TEL_AVIV);
      addCity(MADRID);
    }

    const interval = setInterval(() => {
      fetchCities();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container minwidth='md'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Search />
        </Grid>
        <Grid item xs={12}>
          <CitiesList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
