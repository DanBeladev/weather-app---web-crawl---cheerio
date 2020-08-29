import React from 'react';
import TextField from '@material-ui/core/TextField';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Button, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCityAction,
  showLoaderAction,
  hideLoaderAction,
} from '../actions/appActions';
import { clearInputAction, changeInputAction } from '../actions/searchActions';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  serachBtn: {
    height: '50px',
    width: '12%',
  },
  searchInput: {
    marginInlineEnd: '10px',
    width: '50%',
    height: '100%',
  },
}));

const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.app.message);
  const input = useSelector((state) => state.search.input);
  const addCity = (city) => dispatch(addCityAction(city));
  const showLoader = () => dispatch(showLoaderAction());
  const hideLoader = () => dispatch(hideLoaderAction());
  const clearInput = () => dispatch(clearInputAction());
  const changeInput = (input) => dispatch(changeInputAction(input));

  const buttonClicked = () => {
    if (input.length > 0) {
      showLoader();
      addCity(input);
      hideLoader();
      clearInput();
      M.toast({ html: message });
    } else {
      M.toast({ html: 'Please Insert Non-Empty Location' });
    }
  };

  const inputChanged = (event) => {
    const { value } = event.target;
    changeInput(value);
  };
  return (
    <div className={classes.container}>
      <TextField
        id='standard-search'
        label='Search Location Here'
        type='search'
        variant='outlined'
        placeholder='e.g Rome Italy'
        inputProps={{ min: 0, style: { textAlign: 'center' } }}
        className={classes.searchInput}
        onChange={(event) => inputChanged(event)}
        value={input}
      />
      <Button
        variant='outlined'
        color='primary'
        className={classes.serachBtn}
        onClick={buttonClicked}
      >
        Search Now
      </Button>
    </div>
  );
};

export default Search;
