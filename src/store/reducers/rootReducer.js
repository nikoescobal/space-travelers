import { combineReducers } from 'redux';
import tempReducer from './tempReducer';
import { GET_ROCKETS, SET_ROCKETS } from '../types';

export default combineReducers({
  tempReducer,
});

const initialState = [];

export function rocketsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ROCKETS:
      return state;
    case SET_ROCKETS:
      return [...state, action.payload];
    default:
      return state;
  }
}
