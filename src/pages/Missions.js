import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import {
  getMissions,
  leaveMission,
  joinMission,
} from "../store/reducers/actions/missionActions";

const selectMissions = (state) => state.missions;
const Missions = () => {
  const selectedMissions = useSelector(selectMissions);
  const dispatch = useDispatch();
  const getMissionsData = () => {
    if (selectedMissions.length === 0) {
      dispatch(getMissions());
    }
  };
  useEffect(() => {
    getMissionsData();
  }, []);
  return (
    <div>
      <Table striped bordered hover size="sm" className="table">
        <thead>
          <tr>
            <th> Mission </th> <th> Description </th> <th> Status </th>{" "}
            <th> {} </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {selectedMissions.map((mission) => (
            <tr key={uuidv4()}>
              <td className="mission-name"> {mission.mission_name} </td>{" "}
              <td> {mission.mission_description} </td>{" "}
              <td className="status" width="100px">
                {" "}
                {mission.isReserved ? (
                  <div
                    className="primary"
                    style={{ backgroundColor: "blue", width: "130px" }}
                    bg="success"
                  >
                    {" "}
                    ACTIVE MEMBER{" "}
                  </div>
                ) : (
                  <div
                    className="secondary"
                    style={{ backgroundColor: "grey", width: "120px" }}
                    bg="secondary"
                  >
                    {" "}
                    NOT A MEMBER{" "}
                  </div>
                )}{" "}
              </td>{" "}
              <td className="status" width="150px">
                {" "}
                {mission.isReserved ? (
                  <Button
                    className="join"
                    variant="outline-danger"
                    style={{ border: "1px solid #f02e58", width: "125px" }}
                    onClick={() => dispatch(leaveMission(mission.mission_id))}
                  >
                    {" "}
                    Leave Mission{" "}
                  </Button>
                ) : (
                  <Button
                    variant="outline-dark"
                    className="leave"
                    style={{ border: "1px solid #cacbcd", width: "100px" }}
                    onClick={() => dispatch(joinMission(mission.mission_id))}
                  >
                    {" "}
                    Join Mission{" "}
                  </Button>
                )}{" "}
              </td>{" "}
            </tr>
          ))}{" "}
        </tbody>{" "}
      </Table>{" "}
    </div>
  );
};

export default Missions;
