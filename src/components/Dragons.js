import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import {} from "../store/reducers/dragonReducer";

import {
  cancelReservation,
  reserveDragons,
  fetchData,
} from "../store/reducers/actions/dragonActions";

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
    <div className=' p-6 dragons-container grid grid-cols-1'>
      {dragonStore.map((dragon) => {
        const { id, name, type, images, reserved } = dragon;
        return (
          <div className='flex' key={id}>
            <div className='h-72 w-72 py-3'>
              <img className='h-full' src={images[0]} alt={name} />
            </div>
            <div className='flex flex-col px-4 py-2'>
              <h2 className='text-lg font-bold'>{name}</h2>
              <div>
                {reserved && (
                  <div className='p-0.5 bg-green-600 items-center w-20 flex text-center justify-center text-white rounded'>
                    Reserved
                  </div>
                )}
              </div>
              <p className='capitalize py-2.5'>{type}</p>
              <div>
                {!reserved && (
                  <button
                    className='px-4 py-2 bg-blue-500 text-white rounded'
                    type='button'
                    onClick={() => handleReserve(id)}
                  >
                    Reserve Dragon
                  </button>
                )}
                {reserved && (
                  <button
                    className='px-4 py-2 text-gray-500 border-2 border-gray-500 rounded'
                    type='button'
                    onClick={() => cancelBooking(id)}
                  >
                    Cancel Dragon Reservation
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
// const dispatch = useDispatch();
export default Dragons;
