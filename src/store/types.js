export const GET_ROCKETS = 'space-travelers-hub/rockets/GET_ROCKETS';
export const SET_ROCKETS = 'space-travelers-hub/rockets/SET_ROCKETS';
export const ERROR_ROCKETS = 'space-travelers-hub/rockets/ERROR_ROCKETS';

const LOAD_DRAGONS = 'LOAD_DRAGONS';
const RESERVE_DRAGONS = 'RESERVE_DRAGONS';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';
const LOAD_FAILED = 'LOAD_FAILED';
const url = 'https://api.spacexdata.com/v3/dragons';

const initialState = {
  dragons: [],
};
