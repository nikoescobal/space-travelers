/* eslint-disable no-case-declarations */

import { combineReducers } from 'redux';
import tempReducer from './tempReducer';
import dragonReducer from './dragonReducer';
import rocketsReducer from './rocketReducer';

export default combineReducers({
  tempReducer,
  dragonReducer,
  rocketsReducer,
});
