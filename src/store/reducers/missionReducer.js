/* stylelint-disable */
/* eslint-disable */
import { JOIN_MISSION, LOAD_MISSIONS } from '../types';
import { newStateToJoinMission, newStateToLeaveMission } from '../actions/missionActions'
const initialState = []

const missionReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_MISSIONS:
            return [...state, ...action.payload];
        case JOIN_MISSION:
            return newStateToJoinMission(state, action.payload);
        case LEAVE_MISSION:
            return newStateToLeaveMission(state, action.payload);
        default:
            return state;
    }

};

export default missionReducer;