import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getRocketsAction } from '../store/reducers/actions/rocketActions';
import { fetchData } from '../store/reducers/actions/dragonActions';

// export const RocketProfile = () => {
//   const dispatch = useDispatch();
//   const { rockets } = useSelector((state) => state.rockets);

//   useEffect(() => {
//     if (!rockets) {
//       dispatch(getRocketsAction());
//     }
//   }, []);

//   return (
//     <section className="my-profile inner-padding">
//       <div>
//         <h1>My Missions</h1>
//       </div>
//       <div className="rockets">
//         <h1>My Rockets</h1>
//         <ul className="list-container">
//           {rockets
//             && rockets.filter((rocket) => (
//               <li key={rocket.id} className="list-item">
//                 {rocket.rocket_name}
//               </li>
//             ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

const Profile = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);

  const reservedDragons = dragons.filter((dragon) => dragon.reserved === true);

  useEffect(() => {
    if (!dragons.length) {
      dispatch(fetchData);
    }
  }, []);

  return (
    <div>
      {reservedDragons.length ? (
        <>
          <h2>My Reserved Dragons</h2>
          <ul>
            {reservedDragons.map((dragon) => (
              <li key={dragon.name}>{dragon.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <h2>There are currently no dragons reserved.</h2>
      )}
    </div>
  );
};
export default Profile;
