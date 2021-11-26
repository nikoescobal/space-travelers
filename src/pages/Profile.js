import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsAction } from '../store/reducers/actions/rocketActions';
import { fetchData } from '../store/reducers/actions/dragonActions';

const Profile = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);
  const { rockets } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!rockets) {
      dispatch(getRocketsAction());
    }
  }, []);

  useEffect(() => {
    if (!dragons.length) {
      dispatch(fetchData);
    }
  }, []);

  return (
    <div>
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
            {dragons
            && dragons.filter((dragon) => dragon.reserved === true)
              .map((reserve) => (
                <td className="border-gray-400 border px-6 py-3" key={reserve.id}>{reserve.name}</td>
              ))}
          </tr>
          <tr className=" flex flex-col px-6 py-3">
            {rockets
              && rockets.filter((rocket) => rocket.reserved === true)
                .map((filtered) => (
                  <td className="border-gray-400 border px-6 py-3" key={filtered.id}>{filtered.rocket_name}</td>
                ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Profile;
