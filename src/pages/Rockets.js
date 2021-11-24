import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  cancelReservationAction,
  getRocketsAction,
  setReserveAction,
} from '../store/reducers/actions/actions';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);
  const loadRockets = () => {
    dispatch(getRocketsAction());
  };
  useEffect(() => {
    loadRockets();
  }, []);

  const setReserve = (id) => {
    dispatch(setReserveAction(id));
  };

  const cancelReserve = (id) => {
    dispatch(cancelReservationAction(id));
  };

  return (
    <section className="inner-padding">
      {rockets
        && rockets.filter((rocket) => (
          <div className="rocket" key={rocket.id}>
            <div className="rocket-img">
              <img src={rocket.flickr_images} alt="rocket" />
            </div>
            <div className="rocket-info">
              <h1>{rocket.rocket_name}</h1>
              <p>
                {rocket.reserved && <span className="reserve-badge">Reserved</span>}
                {rocket.description}
              </p>
              <div className="button-div">
                {!rocket.reserved ? (
                  <button
                    className="reserve-btn"
                    onClick={() => setReserve(rocket.id)}
                    type="button"
                  >
                    {' '}
                    Reserve
                  </button>
                ) : (
                  <button
                    className="cancel-reserve-btn"
                    onClick={() => cancelReserve(rocket.id)}
                    type="button"
                  >
                    {!rocket.reserved ? 'Reserve' : 'Cancel Reserve'}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Rockets;
