import React, {useEffect} from 'react';
import { Container, Grid } from '@material-ui/core';
import Search from './Search';
import CitiesList from './CitiesList';
import FullLoaderPage from './FullLoaderPage';
import { useSelector, useDispatch } from 'react-redux';
import { setCitiesAction,webCrawlMockAction } from '../actions/appActions';

const Home = (props) => {
  const loading = useSelector((state) => state.app.loading);
  const cities = useSelector((state)=> state.app.cities);
  const dispatch = useDispatch();
  const fetchCities = (cities) => dispatch(setCitiesAction(cities));
  const webCrawlMock = (location) => dispatch(webCrawlMockAction(location));
  

  useEffect(() => {
    console.log('only once in use effect');
    if(cities.length === 0 ){
      webCrawlMock('Tel-Aviv Israel');
      webCrawlMock('Madrid Spain');
    }
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      fetchCities(cities);
      console.log('This will run every 5 second!');
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
