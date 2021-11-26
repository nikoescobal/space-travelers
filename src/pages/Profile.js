import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getRocketsAction } from '../store/reducers/actions/actions';
import { fetchData } from '../store/reducers/actions/dragonActions';

// const Profile = () => {
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
// export default Profile;

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
          <table className="table-fixed mx-auto w-full">
            <thead>
              <tr>
                <th className="w-1/3 space-x-3 text-2xl p-3 font-bold">My Dragons</th>
                <th className="w-1/3 space-x-3 text-2xl p-3 font-bold">My Rockets </th>
                <th className="w-1/3 space-x-3 text-2xl p-3 font-bold">My Missions</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" flex flex-col px-6 py-3">
                {reservedDragons.map((dragon) => (
                  <td className="border-gray-400 border px-6 py-3" key={dragon.name}>{dragon.name}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <h2 className="p-3 text-2xl font-bold">
          There are currently no dragons reserved.
        </h2>
      )}
    </div>
  );
};
export default Profile;
