/* stylelint-disable */
/* eslint-disable */

/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_ROCKETS, SET_ROCKETS, ERROR_ROCKETS } from './types';

export const getRocketsAction = () => async (dispatch) => {
  const baseUrl = 'https://api.spacexdata.com/v3/rockets';
  try {
    dispatch({ type: GET_ROCKETS });
    const rockets = await axios.get(`${baseUrl}`);
    dispatch({ type: SET_ROCKETS, payload: rockets });
  } catch (error) {
    dispatch({ type: ERROR_ROCKETS, payload: error.message });
  }
};
