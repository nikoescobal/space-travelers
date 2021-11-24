/* stylelint-disable */
/* eslint-disable */
import { LOAD_DRAGONS, LOAD_FAILED } from '../types';
const initialState = {
    dragons: [],
};
const dragonReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DRAGONS:
            return {
                ...state,
                dragons: action.payload,
            };
        case LOAD_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default dragonReducer;