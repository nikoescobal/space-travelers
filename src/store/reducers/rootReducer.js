import { combineReducers } from 'redux';
import tempReducer from './tempReducer';

const GET_ROCKETS = 'space-travelers-hub/rockets/GET_ROCKETS';
const SET_ROCKETS = 'space-travelers-hub/rockets/SET_ROCKETS';

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
