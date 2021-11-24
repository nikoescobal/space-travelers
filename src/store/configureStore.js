/* eslint-disable import/no-named-as-default */
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rocketsReducer from './reducers/rootReducer';
import dragonReducer from './reducers/dragonReducer';

const reducers = combineReducers({
  rockets: rocketsReducer,
  dragons: dragonReducer,
});

const middlwares = [thunk, logger];

const configureStore = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlwares)),
);

export default configureStore;
