/* eslint-disable no-case-declarations */

import {
  LOAD_DRAGONS,
  LOAD_FAILED,
  initialState,
  RESERVE_DRAGONS,
  CANCEL_RESERVATION,
} from "../types";

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
    case RESERVE_DRAGONS:
      const newState = state.dragons.map((item) => {
        if (item.id === action.payload) {
          return { ...item, reserved: !item.reserved };
        }
        return item;
      });
      return { ...state, dragons: newState };
    case CANCEL_RESERVATION:
      const newStateb = state.dragons.map((item) => {
        if (item.id === action.payload) {
          return { ...item, reserved: !item.reserved };
        }
        return item;
      });
      return { ...state, dragons: newStateb };

    default:
      return state;
  }
};

export default dragonReducer;
