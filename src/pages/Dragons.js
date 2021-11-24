/* eslint-disable prettier/prettier */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import {} from '../store/reducers/dragonReducer';

import {
  cancelReservation,
  reserveDragons,
  fetchData,
} from '../store/reducers/actions/dragonActions';

const Dragons = () => {
  const dragonStore = useSelector((state) => state.dragons.dragons);
  const dispatch = useDispatch();

  const handleReserve = (id) => dispatch(reserveDragons(id));
  const cancelBooking = (id) => dispatch(cancelReservation(id));

  useEffect(() => {
    if (!dragonStore.length) {
      dispatch(fetchData());
    }
  }, []);

  return (
    <div className="dragons-container">
      {dragonStore.map((dragon) => {
        const {
          id, name, type, images, reserved,
        } = dragon;
        return (
          <div key={id}>
            <div>
              <img src={images[0]} alt={name} />
            </div>
            <h2>{name}</h2>
            <p>{type}</p>
            <div>
              {!reserved && (
                <button type="button" onClick={() => handleReserve(id)}>
                  Reserve Dragon
                </button>
              )}
              {reserved && (
                <button type="button" onClick={() => cancelBooking(id)}>
                  Cancel Dragon Reservation
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
// const dispatch = useDispatch();
export default Dragons;
