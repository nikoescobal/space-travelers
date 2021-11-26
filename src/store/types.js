export const GET_ROCKETS = "space-travelers-hub/rockets/GET_ROCKETS";
export const SET_ROCKETS = "space-travelers-hub/rockets/SET_ROCKETS";
export const ERROR_ROCKETS = "space-travelers-hub/rockets/ERROR_ROCKETS";
export const CANCEL_RESERVES = "space-travelers-hub/rockets/CANCEL_RESERVES";
export const SET_RESERVES = "space-travelers-hub/rockets/SET_RESERVES";

export const LOAD_DRAGONS = "LOAD_DRAGONS";
export const RESERVE_DRAGONS = "RESERVE_DRAGONS";
export const CANCEL_RESERVATION = "CANCEL_RESERVATION";
export const LOAD_FAILED = "LOAD_FAILED";
export const url = "https://api.spacexdata.com/v3/dragons";

export const JOIN_MISSION = "space/missions/JOINMISSION";
export const LOAD_MISSIONS = "space/missions/LOADMISSIONS";
export const LEAVE_MISSION = "spacex-hub/missions/LEAVE_MISSION";

export const initialState = {
  dragons: [],
};
