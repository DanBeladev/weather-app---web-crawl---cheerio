import { CHANGE_INPUT, CLEAR_INPUT} from './types';

export const changeInputAction = (text) => async (dispatch) => {
    dispatch({ type: CHANGE_INPUT, payload: text });
};

export const clearInputAction = () => async (dispatch) => {
    dispatch({ type: CLEAR_INPUT, payload: '' });
};