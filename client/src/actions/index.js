import { AUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios';

export const signup = (formValues, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3010/signup', formValues);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email is in use'});
  }
};
