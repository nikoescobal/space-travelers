import React, { useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
    getMissions,
    joinMission,
} from "../store/reducers/actions/missionActions";

const selectMissions = (state) => state.missionsReducer;

const Missions = () => {
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(getMissionsFromApi());
        }, []);
        const selectedMissions = useSelector(selectMissions);
        console.log(selectedMissions);
        return ( <
                div >
                <
                Table striped bordered hover size = "sm"
                className = "table" >
                <
                thead >
                <
                tr >
                <
                th > Mission < /th> <
                th > Description < /th> <
                th > Status < /th> <
                th > {} < /th> <
                /tr> <
                /thead> <
                tbody > {
                    selectedMissions.map((mission) => ( <
                            tr key = { uuidv4() } > { console.log(m.isReserved) } <
                            td className = "mission-name" > { mission.mission_name } < /td> <
                            td > { mission.mission_description } < /td> <
                            td className = "status"
                            width = "100px" > {
                                mission.isReserved ? < Badge bg = "success" > ACTIVE MEMBER < /Badge> :
                                    < Badge bg = "secondary" > NOT A MEMBER < /Badge>} <
                                    /td> <
                                    td className = "status"
                                width = "150px" > {
                                    mission.isReserved ? < Button variant = "outline-danger"
                                    onClick = {
                                        () => dispatch(leaveMission(mission.mission_id)) } > Leave Mission < /Button> :
                                        < Button variant = "outline-dark"
                                    onClick = {
                                        () => dispatch(joinMission(mission.mission_id)) } > Join Mission < /Button>} <
                                    /td> <
                                    /tr>
                                ))
                        }

                        <
                        /tbody> <
                        /Table> <
                        /div>
                    );
                };

                export default Missions;