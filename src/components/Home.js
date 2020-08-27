import React, {useEffect} from 'react';
import { Container, Grid } from '@material-ui/core';
import Search from './Search';
import CitiesList from './CitiesList';
import FullLoaderPage from './FullLoaderPage';
import { useSelector, useDispatch } from 'react-redux';
import { setCitiesAction, addCityAction } from '../actions/appActions';

const Home = (props) => {
  const loading = useSelector((state) => state.app.loading);
  const cities = useSelector((state)=> state.app.cities);
  console.log('cities selector', cities)
  const dispatch = useDispatch();
  const fetchCities = () => dispatch(setCitiesAction(cities));
  const addCity = (location) => dispatch(addCityAction(location));
  

  useEffect(() => {
    if(cities.length === 0 ){
      addCity('Tel-Aviv Israel');
      addCity('Madrid Spain');
    }
  },[]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchCities();
    }, 5000);
    return () => clearInterval(interval);
    });

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
