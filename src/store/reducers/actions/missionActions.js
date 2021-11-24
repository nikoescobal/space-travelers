import { JOIN_MISSION, LOAD_MISSIONS } from '../../types';

const URL = 'https://api.spacexdata.com/v3/missions';
export const joinMissions = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const loadMissions = (id) => ({
  type: LOAD_MISSIONS,
  payload: id,
});

export const fetchAllMissions = async () => {
  const response = await fetch(URL);
  return response.json();
};

export const missionsSelector = (state) => state.missions;

const getMissions = () => async function getMissions(dispatch) {
  const allMissions = await fetchAllMissions();
  const missions = allMissions.map((mission) => ({
    id: mission.mission_id,
    missionName: mission.mission_name,
    description: mission.description,
    wikipedia: mission.details,
  }));
  dispatch(loadMissions(missions));
};

export default getMissions;
