/* eslint-disable max-len */
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
    <div className="grid grid-cols-3 w-full mx-auto">
      <section>
        <h2 className="text-2xl w-full flex justify-center items-center p-3 font-bold">
          My Rockets
        </h2>
        <ul className=" flex flex-col px-6 py-3">
          {rockets
            && rockets
              .filter((rocket) => rocket.reserved === true)
              .map((filtered) => (
                <li
                  className="border-gray-400 border p-6"
                  key={filtered.id}
                >
                  {filtered.rocket_name}
                </li>
              ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl w-full flex justify-center items-center p-3 font-bold">
          My Missions
        </h2>
      </section>
      <section>
        <h2 className="text-2xl w-full flex justify-center items-center p-3 font-bold">
          My Dragons
        </h2>
        <ul className=" flex flex-col px-6 py-3">
          {dragons
            && dragons
              .filter((dragon) => dragon.reserved === true)
              .map((reserve) => (
                <li
                  className="border-gray-400 border  p-6"
                  key={reserve.id}
                >
                  {reserve.name}
                </li>
              ))}
        </ul>
      </section>
    </div>
  );
};
export default Profile;
