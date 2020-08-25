import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Button, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {
  addCityAction,
} from '../actions/appActions';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    // backgroundColor: '#F8F8F8AD',
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
  const [text, setText] = useState('');
  const addCity = (city) =>
  dispatch(addCityAction(city));


  // const input = useSelector(state => state.search.input);
  const buttonClicked = () => {
    if(text.length > 0)
    {
      addCity(text);
      M.toast({html:`Great, ${text} was added successfully`})
    }
      else{
      M.toast({html:'Please insert non empty input'})
    }
  }

  const inputChanged = (event) => {
    const { value } = event.target;
    setText(value);
    
  }
  return (
    <div className={classes.container}>
      <TextField
        id='standard-search'
        label='Search Location Here'
        type='search'
        variant='outlined'
        placeholder='e.g Rome Italy'
        inputProps={{min: 0, style: { textAlign: 'center' }}}
        className={classes.searchInput}
        onChange={event => inputChanged(event)}
        value={text}
      />
      <Button variant='outlined' color='primary' className={classes.serachBtn} onClick={buttonClicked}>
        Search Now
      </Button>
    </div>
  );
};

export default Search;
