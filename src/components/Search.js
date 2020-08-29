import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Button, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCityAction,
} from '../actions/appActions';
import { clearInputAction, changeInputAction } from '../actions/searchActions';
import { TEL_AVIV, MADRID } from '../constants';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  serachBtn: {
    height: '50px',
    width: '12%',
    borderColor: 'black',
    color: 'black'
  },
  searchInput: {
    marginInlineEnd: '10px',
    width: '50%',
    height: '100%',
    borderColor: 'black',
    color: 'black'
  },
}));

const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const message = useSelector((state) => state.app.message);
  const input = useSelector((state) => state.search.input);
  const cities = useSelector((state) => state.app.cities);

  const addCity = (city) => dispatch(addCityAction(city));
  const clearInput = () => dispatch(clearInputAction());
  const changeInput = (input) => dispatch(changeInputAction(input));

  const IsCityAllreadyExist = (input) => {
    const splitedData = input.split(' ');
    const city = splitedData[0];
    const country = splitedData[1];
    let res = false;
    cities.forEach((location) => {
      if (location.city === city && location.country === country) {
        res = true;
      }
    });
    return res;
  };

  const buttonClicked = async () => {
    if(input.length === 0){
      M.toast({ html: `Please Insert Non-Empty Location` });
      return;
    }
    if (!IsCityAllreadyExist(input)) {
      addCity(input);
      clearInput();
    } else {
      M.toast({ html: `${input} Already Exist ` });
    }
  };

  const inputChanged = (event) => {
    const { value } = event.target;
    changeInput(value);
  };

  const isDeafaultCities = () => {
    return message.includes(TEL_AVIV) || message.includes(MADRID);
  };

  useEffect(() => {
    if (!isDeafaultCities() && message.length > 0) {
      M.toast({ html: message });
    }
  }, [message]);

  return (
    <div className={classes.container}>
      <TextField
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            buttonClicked();
            event.preventDefault();
          }
        }}
        autoFocus
        id='standard-search'
        label='Search Location Here'
        type='search'
        variant='outlined'
        placeholder='e.g Rome Italy'
        inputProps={{ min: 0, style: { textAlign: 'center', borderColor:'black' } }}
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
