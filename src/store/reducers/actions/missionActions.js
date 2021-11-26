import { JOIN_MISSION, LOAD_MISSIONS, LEAVE_MISSION } from "../../types";

export const URL = "https://api.spacexdata.com/v3/missions";
export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const loadMissions = (id) => ({
  type: LOAD_MISSIONS,
  payload: id,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

export const fetchAllMissions = async () => {
  const response = await fetch(URL);
  return response.json();
};

export const missionsSelector = (state) => state.missions;

// export const getMissions = () =>
//   async function getMissions(dispatch) {
//     const allMissions = await fetchAllMissions();
//     const missions = allMissions.map((mission) => ({
//       id: mission.mission_id,
//       missionName: mission.mission_name,
//       description: mission.description,
//       wikipedia: mission.details,
//     }));
//     dispatch(loadMissions(missions));
//   };

export const getMissions = () => async (dispatch) => {
  const response = await fetch(URL);
  const data = await response.json();
  const missionArr = [];
  data.forEach((m) => {
    const mission = {
      mission_id: m.mission_id,
      mission_name: m.mission_name,
      mission_description: m.description,
    };
    missionArr.push(mission);
  });
  dispatch(loadMissions(missionArr));
};
export const newStateToJoinMission = (missions, id) => {
  const newState = missions.map((mission) => {
    if (mission.mission_id !== id) {
      return mission;
    }
    return { ...mission, isReserved: true };
  });
  return newState;
};

export const newStateToLeaveMission = (missions, id) => {
  const newState = missions.map((mission) => {
    if (mission.mission_id !== id) {
      return mission;
    }
    return { ...mission, isReserved: false };
  });
  return newState;
};

export default getMissions;
