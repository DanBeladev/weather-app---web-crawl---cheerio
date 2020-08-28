import React from 'react';
import { makeStyles } from '@material-ui/core';
import CloudGif from '../assets/cloud.gif';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#F8F8F8AD',
    alignItems: 'center',
  },
  loader: {
    left: '50%',
    top: '30%',
    zIndex: 1000,
    position: 'absolute',
  },
  loadingText: {
    fontSize: 40,
    fontfamily: 'cursive',
  },
  gifContainer: {
    marginTop: 20,
  },
  image: {
    height: 200,
    width: 160,
  },
}));
function FullLoaderPage() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.loader}>
        <div className={classes.loadingText}>Loading...</div>
        <div className={classes.gifContainer}>
          <img className={classes.image} src={CloudGif} alt='' />
        </div>
      </div>
    </div>
  );
}

export default FullLoaderPage;
