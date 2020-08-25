import React, { Fragment, useEffect } from 'react';
import AppHeader from './components/AppHeader';
import Home from './components/Home';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

const useStyles = makeStyles((theme) => ({
  appContent: {
    padding: 30,
    height: '100%',
    width: '100%',
  },
}));

function App() {
  const classes = useStyles();
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <AppHeader />
      <Box className={classes.appContent}>
        <Home />
      </Box>
    </Fragment>
  );
}

export default App;
