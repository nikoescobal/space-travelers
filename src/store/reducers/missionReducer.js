/* stylelint-disable */
/* eslint-disable */
import { JOIN_MISSION, LOAD_MISSIONS } from '../types';
const initialState = []

const missionReducer = (state = initialState, action) => {
    switch (action.type) {
        case JOIN_MISSION:
            {
                const selectedMission = state.find(({ id }) => action.payload === id);
                selectedMission.reserved = !selectedMission.reserved;
                return [...state];
            }
        case LOAD_MISSIONS:
            return state.concat(action.payload);
        default:
            return state;
    }

};

export default missionReducer;