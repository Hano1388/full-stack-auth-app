import { AUTH_USER } from './types';
import axios from 'axios';

export const signup = formValues => async dispatch => {
  const response = await axios.post('http://localhost:3010/signup', formValues);
  console.log(response);
  dispatch({ type: AUTH_USER, payload: response.data });
};
