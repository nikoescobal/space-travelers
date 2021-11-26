// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
// import {
//   getMissions,
//   joinMission,
// } from '../store/reducers/actions/missionActions';

// const selectMissions = (state) => state.missionsReducer;

// const Missions = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getMissions());
//   }, []);
//   const selectedMissions = useSelector(selectMissions);
//   console.log(selectedMissions);
//   return (
//     <div>
//       <table className="table">
//         <thead>
//           <tr>
//             <th> Mission </th>
//             {' '}
//             <th> Description </th>
//             {' '}
//             <th> Status </th>
//             {' '}
//             <th>
//               {' '}
//               {}
//               {' '}
//             </th>
//             {' '}
//           </tr>
//           {' '}
//         </thead>
//         {' '}
//         <tbody>
//           {' '}
//           {selectedMissions.map((mission) => (
//             <tr key={uuidv4()}>
//               {' '}
//               {console.log(mission.isReserved)}
//               {' '}
//               <td className="mission-name">
//                 {' '}
//                 {mission.mission_name}
//                 {' '}
//               </td>
//               {' '}
//               <td>
//                 {' '}
//                 {mission.mission_description}
//                 {' '}
//               </td>
//               {' '}
//               <td className="status" width="100px">
//                 {' '}
//                 {mission.isReserved ? (
//                   <div className="success"> ACTIVE MEMBER </div>
//                 ) : (
//                   <div classNname="secondary"> NOT A MEMBER </div>
//                 )}
//                 {' '}
//               </td>
//               {' '}
//               <td className="status" width="150px">
//                 {' '}
//                 {mission.isReserved ? (
//                   <button
//                     type="button"
//                     className="outline-danger"
//                     onClick={() => dispatch(leaveMission(mission.mission_id))}
//                   >
//                     {' '}
//                     Leave Mission
//                     {' '}
//                   </button>
//                 ) : (
//                   <button
//                     type="button"
//                     className="outline-dark"
//                     onClick={() => dispatch(joinMission(mission.mission_id))}
//                   >
//                     {' '}
//                     Join Mission
//                     {' '}
//                   </button>
//                 )}
//                 {' '}
//               </td>
//               {' '}
//             </tr>
//           ))}
//           {' '}
//         </tbody>
//         {' '}
//       </table>
//       {' '}
//     </div>
//   );
// };

// export default Missions;
