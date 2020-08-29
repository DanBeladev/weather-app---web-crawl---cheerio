import React, { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import Search from './Search';
import CitiesList from './CitiesList';
import FullLoaderPage from './FullLoaderPage';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCitiesAction,
  addCityAction,
  // showLoaderAction,
  // hideLoaderAction,
} from '../actions/appActions';
import { TEL_AVIV, MADRID } from '../constants';

const Home = (props) => {
  const loading = useSelector((state) => state.app.loading);
  const cities = useSelector((state) => state.app.cities);
  const dispatch = useDispatch();
  const fetchCities = () => dispatch(setCitiesAction(cities));
  const addCity = (location) => dispatch(addCityAction(location));
  // const showLoader = () => dispatch(showLoaderAction());
  // const hideLoader = () => dispatch(hideLoaderAction());

  useEffect(() => {
    if (cities.length === 0) {
      // showLoader();
      addCity(TEL_AVIV);
      addCity(MADRID);
      // hideLoader();
    }

    const interval = setInterval(() => {
      // showLoader();
      fetchCities();
      console.log('i fetched');
      // hideLoader();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return loading ? (
    <FullLoaderPage />
  ) : (
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
