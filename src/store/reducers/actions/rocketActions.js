import axios from "axios";
import {
  GET_ROCKETS,
  SET_ROCKETS,
  ERROR_ROCKETS,
  SET_RESERVES,
  CANCEL_RESERVES,
} from "../../types";

export const getRocketsAction = () => async (dispatch) => {
  const baseUrl = "https://api.spacexdata.com/v3/rockets";
  try {
    dispatch({ type: GET_ROCKETS });
    const newRocketList = [];
    const { data } = await axios.get(`${baseUrl}`);
    data.map((item) => {
      const rocketObj = {
        id: item.id,
        rocket_name: item.rocket_name,
        description: item.description,
        flickr_images: item.flickr_images[0],
      };
      return newRocketList.push(rocketObj);
    });
    dispatch({ type: SET_ROCKETS, payload: newRocketList });
  } catch (error) {
    dispatch({ type: ERROR_ROCKETS, payload: error.message });
  }
};

export const setReserveAction = (rocketId) => (dispatch) => {
  try {
    dispatch({ type: SET_RESERVES, payload: rocketId });
  } catch (error) {
    dispatch({ type: ERROR_ROCKETS, payload: error.message });
  }
};

export const cancelReservationAction = (rocketId) => (dispatch) => {
  try {
    dispatch({ type: CANCEL_RESERVES, payload: rocketId });
  } catch (error) {
    dispatch({ type: ERROR_ROCKETS, payload: error.message });
  }
};
